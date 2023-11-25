import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';
import { Observable } from 'rxjs';

@Component({
  selector: 'Match',
  template: ''
})
export abstract class MatchComponent extends CrudFormComponent implements OnInit {
  ZoneList: any[];
  MatchStatusList: any[];
  
  


  ngOnInit(): void {
    this.entityName = "Match";
    this.identityKey = true;
    this.fillRecordListOnInit = false;

 this.onGetRecord.subscribe(record => this.deleteable = (record.MatchExpense.length === 0)) ;

    
    this.onAddRecord.subscribe(record =>
      {
        record.MatchStatusID = "NotStarted";
      })
    this.referenceData.push(
      { url: 'Api/Zone', listName: 'ZoneList' },
      { url: 'Api/MatchStatus', listName: 'MatchStatusList' },
      
    );

    
  
   

  }



  
}

@Component({
  selector: 'Match-list',
  templateUrl: './Match-list.html',
})
export class MatchListComponent extends MatchComponent { 
  

  
}

@Component({
  selector: 'Match-crud',
  templateUrl: './Match-crud.html',
})
export class MatchCrudComponent extends MatchComponent { 

  private socket: WebSocket;
  private connection: Observable<any>;


  ngOnInit(): void {
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
  
  public startMatch ():void
  {
    //this.record.text ="Algo muy bueno";
    this.record.DataTranslation = undefined;
    this.sendMessage(JSON.stringify(this.record));

  }

  
}


