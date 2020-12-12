import {Component, OnInit} from '@angular/core';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {animate, sequence, style, transition, trigger} from '@angular/animations';
import {MinerModel} from '../model/miner.model';
import {MinerService} from '../service/miner.service';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('infoAnim', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-50px)', 'box-shadow': 'none' }),
        sequence([
          animate('0.2s ease', style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate('0.2s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  msgs1: Message[];

  miner: MinerModel;
  part: string;
  brigadeId: number;

  constructor(private primengConfig: PrimeNGConfig, private minerService: MinerService,
              private localStorageService: LocalStorageService) {}

  ngOnInit(): void {

    this.minerService.getMiner(this.localStorageService.retrieve('minerId')).subscribe((minerData:MinerModel) => {
      this.miner = minerData;
      console.log(this.miner.minerId);
    });

    this.part = this.localStorageService.retrieve('part');
    this.brigadeId = this.localStorageService.retrieve('brigadeId');

    // TabMenu
    this.items = [
      {label: 'О себе', icon: 'pi pi-fw pi-user',
        command: () => {
          this.activeItem = this.items[0];
          console.log(this.activeItem.label);
        }
      },
      {label: 'Дополнительная информация', icon: 'pi pi-fw pi-info',
        command: () => {
          this.activeItem = this.items[1];
          console.log(this.activeItem.label);
        }},
      {label: 'Сообщения', icon: 'pi pi-fw pi-envelope',
        command: () => {
          this.activeItem = this.items[2];
          console.log(this.activeItem.label);
        }},
    ];

    this.activeItem = this.items[0];

    // Messages
    this.msgs1 = [
      {severity: 'success', summary: 'Success', detail: 'Message Content'},
      {severity: 'info', summary: 'Info', detail: 'Message Content'},
      {severity: 'warn', summary: 'Warning', detail: 'Message Content'},
      {severity: 'error', summary: 'Error', detail: 'Message Content'}
    ];

    this.primengConfig.ripple = true;
  }

}

