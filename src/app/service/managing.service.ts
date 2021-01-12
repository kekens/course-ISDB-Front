import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {ManagingModel} from "../model/managing.model";


@Injectable({
  providedIn: 'root'
})

export class ManagingService{
  private url = "http://localhost:8080/api/managing/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  getAllManaging(brigadeId: number): Observable<Array<ManagingModel>>
  {
    return this.httpClient.get<Array<ManagingModel>>(this.url+'mg/'+ brigadeId)
  }

  deleteManaging(minerId: number){
    return this.httpClient.get(this.url+'delete/'+ minerId)
  }

}
