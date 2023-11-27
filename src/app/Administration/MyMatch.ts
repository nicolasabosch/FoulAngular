import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'MyMatch',
  template: ''
})
export abstract class MyMatchComponent extends CrudFormComponent implements OnInit {
  ZoneList: any[];
  MatchStatusList: any[];
  UserList: any[];

  public  preSearchRecordList():void
  {
    this.search = {};
        this.search.UserID = this.crudService.user.UserID;
        alert(this.search.UserID);
  }

  ngOnInit(): void {
    this.entityName = "Match";
    this.identityKey = true;
    this.fillRecordListOnInit = false;
    this.deleteable =false;
   

    this.onAddRecord.subscribe(record => {

      record.MatchStatusID = "NotStarted";
    });
    this.referenceData.push(
      { url: 'Api/Zone', listName: 'ZoneList' },
      { url: 'Api/MatchStatus', listName: 'MatchStatusList' },
      { url: 'Api/User/Referees', listName: 'UserList' },
    );





  }




}

@Component({
  selector: 'MyMatch-list',
  templateUrl: './MyMatch-list.html',
})
export class MyMatchListComponent extends MyMatchComponent {



}

@Component({
  selector: 'MyMatch-crud',
  templateUrl: './MyMatch-crud.html',
})
export class MyMatchCrudComponent extends MyMatchComponent {

  private socket: WebSocket;
  private connection: Observable<any>;


  ngOnInit(): void {
    super.ngOnInit();
    this.socket = new WebSocket('ws://172.174.204.46:8000');
    this.connection = this.connect();

  }

  public connect(): Observable<any> {
    return new Observable(observer => {
      this.socket.onmessage = (event) => observer.next(event.data);
      this.socket.onerror = (event) => observer.error(event);
      this.socket.onclose = () => observer.complete();
    });
  }

  public sendMessage(message: string): void {
    this.socket.send(message);
  }

  public startMatch(): void {
    //this.record.text ="Algo muy bueno";
    this.record.DataTranslation = undefined;
    this.sendMessage(JSON.stringify(this.record));

  }


}


