import { Component, OnInit, ViewChild} from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from "@fullcalendar/angular";
import {ScheduleModel} from '../model/schedule.model';
import {ScheduleService} from '../service/schedule.service';
import {LocalStorageService} from 'ngx-webstorage';
import {MinerService} from '../service/miner.service';
import {MinerDeliveryResponseModel} from '../model/miner-delivery-response.model';
import {DeliveryMinerService} from '../service/delivery-miner.service';
import {MessageService} from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [ MessageService ]
})
export class ScheduleComponent implements OnInit {

  @ViewChild("fullcalendar") fullCalendar: FullCalendarComponent;
  displayModal: boolean;
  schedule: ScheduleModel[];
  minerDeliveryResponses: MinerDeliveryResponseModel[];
  eventsCalendar: any[] = [];
  calendarOptions: CalendarOptions;
  part: string;
  cols: any[];

  constructor(private scheduleService: ScheduleService, private minerService: MinerService,
              private localStorageService: LocalStorageService, private deliveryService: DeliveryMinerService,
              private messageService: MessageService, private titleService: Title) {
    this.titleService.setTitle('Schedule');
  }

  addSuccess() {
    this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Оборудование выдано', life: 5000 });
  }

  addError(errorMsg: string) {
    this.messageService.add({severity: 'error', summary: 'Ошибка', detail: errorMsg, life: 5000 });
  }

  ngOnInit() {

    this.scheduleService.getSchedule(this.localStorageService.retrieve('brigadeId')).subscribe(scheduleArray => {
      this.schedule = scheduleArray;
      this.schedule.forEach(sch => {
        let calendarevent = {
          title: 'Шахта ' + sch.mineName,
          start: new Date(sch.workDate).getFullYear() + '-' + (new Date(sch.workDate).getMonth() + 1) + '-' + new Date(sch.workDate).getDate()
          ,
        };
        this.eventsCalendar.push(calendarevent);
      });

      this.calendarOptions = {
        selectable: true,
        initialView: 'dayGridMonth',
        buttonText: {
          today: 'Сегодня'
        },
        locale: 'ru',
        events: this.eventsCalendar,
        dateClick: this.onClickDate.bind(this),
        eventBackgroundColor: '#9F5050',
        height: 775,
      };

    });

    this.minerService.getMinersDelivery(this.localStorageService.retrieve('brigadeId')).subscribe(minerDeliveryArray => {
      this.minerDeliveryResponses = minerDeliveryArray;
      this.minerDeliveryResponses.forEach(function(value) {
        value.part = value.part.charAt(0) + value.part.substr(1).toLowerCase();
      })
    });

    this.cols = [
      { field: 'minerId', header: 'Номер' },
      { field: 'name', header: 'Имя' },
      { field: 'part', header: 'Роль' },
    ];

    this.part = this.localStorageService.retrieve('part');
  }

  onClickDate(arg) {
    this.fullCalendar.getApi().gotoDate(arg.date);
    this.fullCalendar.getApi().select(arg.date);
    console.log(this.fullCalendar.getApi().getDate());
  }

  showModalDialog() {
    this.displayModal = true;
  }

  doDelivery(minerId: number): void {
    console.log('minerId ' + minerId);
    const arrayOfMinerId: number[] = this.minerDeliveryResponses.map(x=>x.minerId);
    this.deliveryService.doDelivery(minerId).subscribe(data => {
      this.minerDeliveryResponses.splice(arrayOfMinerId.indexOf(minerId), 1);
      this.addSuccess();
    }, error => {
      console.log(error);
      this.addError(error);
    });
  }

}
