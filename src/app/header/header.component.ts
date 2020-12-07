import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[];
  itemRight: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Расписание',
        routerLink: ['/schedule']
      },
      {
        label: 'Журнал',
        routerLink: ['/magazine']

       },
      {
        label: 'Управление',
        routerLink: ['/managing'],

      }
    ];
    this.itemRight = [
      {
        label: '[2] Владимир П.П.',
        items: [
          {
            label: 'Личный кабинет',
            styleClass: 'submenu-item'
          },
          {
            label: 'Выход',
            styleClass: 'submenu-item'
          }
        ]
      }
      ];
  }
}
