import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { DeliveryMinerModel } from './delivery-miner.model';
import {DeliveryMinerService} from './delivery-miner.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild("fullcalendar") fullCalendar: FullCalendarComponent;
  displayModal: boolean;

  deliveringMiner: DeliveryMinerModel[] = [
    { id: 1, name: 'A', part: 'F' },
    { id: 2, name: 'A', part: 'F' },
    { id: 3, name: 'A', part: 'F' },
    { id: 4, name: 'A', part: 'F' },
    { id: 5, name: 'A', part: 'F' },
    { id: 6, name: 'A', part: 'F' },
    { id: 7, name: 'A', part: 'F' },
    { id: 8, name: 'A', part: 'F' },
    { id: 9, name: 'A', part: 'F' },
    { id: 10, name: 'A', part: 'F' },
  ];
  cols: any[];

  constructor(private deliveryMinerService: DeliveryMinerService) {
  }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Номер' },
      { field: 'name', header: 'Имя' },
      { field: 'part', header: 'Роль' },
    ];

  }

  calendarOptions: CalendarOptions = {
    selectable: true,
    initialView: 'dayGridMonth',
    buttonText: {
      today: 'Сегодня'
    },
    locale: 'ru',
    events: [
      { title: 'Шахта ААААА', date: '2020-12-01' },
      { title: 'шахта БББББ', date: '2020-12-02' }
    ],
    dateClick: this.onClickDate.bind(this),
    eventBackgroundColor: '#9F5050',
    height: 775

  };

  onClickDate(arg) {
    this.fullCalendar.getApi().gotoDate(arg.date);
    this.fullCalendar.getApi().select(arg.date);
    console.log(this.fullCalendar.getApi().getDate());
  }

  showModalDialog() {
    this.displayModal = true;
  }

  doDelivery(numb: number): void {
    console.log(numb);
  }

}
