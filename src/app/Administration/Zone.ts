import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Zone',
  template: ''
})
export abstract class ZoneComponent extends CrudFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.entityName ="Zone";
    this.identityKey =true;
    this.referenceData.push(
      	
    );
    
    this.fillRecordListOnInit = true;
    
  }
  

}

@Component({
  selector: 'Zone-list',
  templateUrl: './Zone-list.html',
})
export class ZoneListComponent extends ZoneComponent {}

@Component({
  selector: 'Zone-crud',
  templateUrl: './Zone-crud.html',
})
export class ZoneCrudComponent extends ZoneComponent {}
