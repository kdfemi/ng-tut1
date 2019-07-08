import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import {HttpResponse} from '@angular/common/http'
import { from } from 'rxjs';
import { promise } from 'protractor';
import { DataStruct } from './data-struct';
@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave(){
    this.serverService.storeServers(this.servers)
    .subscribe((res)=> console.log(res), (err)=> console.log(err))
  }

  onGet(){
    this.serverService.getServers()
    .subscribe(
      (res)=>{
        console.log(res, 'ios'); 
      },
      (err)=>{
        console.log(err)
      })
  }
}
