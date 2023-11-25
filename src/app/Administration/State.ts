import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'State',
  template: ''
})
export abstract class StateComponent extends CrudFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.entityName ="State";
    this.referenceData.push(
      	
    );
    
    this.fillRecordListOnInit = true;
    
  }
  

}

@Component({
  selector: 'State-list',
  templateUrl: './State-list.html',
})
export class StateListComponent extends StateComponent {}

@Component({
  selector: 'State-crud',
  templateUrl: './State-crud.html',
})
export class StateCrudComponent extends StateComponent {}
