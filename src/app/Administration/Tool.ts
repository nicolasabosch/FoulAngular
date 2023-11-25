import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Tool',
  template: ''
})
export abstract class ToolComponent extends CrudFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.entityName ="Tool";
    this.referenceData.push(
      	
    );
    
    this.fillRecordListOnInit = true;
    
  }
  

}

@Component({
  selector: 'Tool-list',
  templateUrl: './Tool-list.html',
})
export class ToolListComponent extends ToolComponent {}

@Component({
  selector: 'Tool-crud',
  templateUrl: './Tool-crud.html',
})
export class ToolCrudComponent extends ToolComponent {}
