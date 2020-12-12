import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { MinerModel } from '../model/miner.model';

@Injectable({
  providedIn: 'root'
})
export class MinerService {
  private url = "http://localhost:8080/api/miner/";

  constructor(private httpClient: HttpClient) {
  }

  getMiner(id: number): Observable<MinerModel> {
    return this.httpClient.get<MinerModel>(this.url + 'get/' + id).pipe();
  }

}
