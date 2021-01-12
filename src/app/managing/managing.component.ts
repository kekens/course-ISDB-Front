import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {ManagingModel} from "../model/managing.model";
import {ManagingService} from "../service/managing.service";


@Component({
  selector: 'app-managing',
  templateUrl: './managing.component.html',
  styleUrls: ['./managing.component.scss']
})
export class ManagingComponent implements OnInit {
  managingModel: ManagingModel;
  managing: ManagingModel[]
  minerId: number;
  managingValue: number;
  brigadeId: number;


  public constructor(private managingService: ManagingService
    , private localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    this.brigadeId = this.localStorageService.retrieve('brigadeId');
    this.managingService.getAllManaging(this.brigadeId).subscribe(managingArray => {
      this.managing = managingArray;
    })
  }

  deleteSubmit(mg) {
    this.minerId = mg;
    console.log(this.minerId)
    this.managingService.deleteManaging(this.minerId).subscribe(data => {
    });
  }
}

