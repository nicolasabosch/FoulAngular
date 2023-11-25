import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Team',
  template: ''
})
export abstract class TeamComponent extends CrudFormComponent implements OnInit {
  ZoneList: any[];

  ngOnInit(): void {
    this.entityName ="Team";
    this.identityKey =true,
    this.setDetailList("TeamPlayer", "TeamPlayerID", { 'TeamPlayerID': 0});
    this.viewRecordOn1SearchResult =false;
    this.referenceData.push(
      	{url: 'Api/Zone', listName: 'ZoneList' },

    );
    
    this.onAddRecord.subscribe(record => {
      //record.TeamID = '12345';
    })
    
    
  }
  

}

@Component({
  selector: 'Team-list',
  templateUrl: './Team-list.html',
})
export class TeamListComponent extends TeamComponent {}

@Component({
  selector: 'Team-crud',
  templateUrl: './Team-crud.html',
})
export class TeamCrudComponent extends TeamComponent {}
