import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { DataStruct } from './data-struct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
 

  storeServers(servers: any[]){
    const headers = new HttpHeaders({'Content-Type': 'application.json'})
    return this.http.post('https://udemy-ng-http-d9702.firebaseio.com/data.json',servers,{ headers:headers})
  }
  getServers(){
    return this.http.get('https://udemy-ng-http-d9702.firebaseio.com/data.json')
    .pipe(
      map((data:DataStruct[])=>{
        return Object.values(data)[0];
      }));
  }
}
