import {Component, OnInit} from '@angular/core';
import {ReceiveMinerService} from '../service/receive-miner.service';
import {ReceiveMinerModel} from '../model/receive-miner.model';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {
  displayModal: boolean;

  receivingMiner: ReceiveMinerModel[] = [
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

  // constructor(private receivingMinerService: ReceiveMinerService) {
  // }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Номер' },
      { field: 'name', header: 'Имя' },
      { field: 'part', header: 'Роль' },
    ];

  }

  showModalDialog() {
    this.displayModal = true;
  }

  doReceiving(numb: number): void {
    console.log(numb);
  }

}
