import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'ProjectType',
  template: ''
})
export abstract class ProjectTypeComponent extends CrudFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.entityName ="ProjectType";
    this.referenceData.push(
      	
    );
    
    this.fillRecordListOnInit = true;
    
  }
  

}

@Component({
  selector: 'ProjectType-list',
  templateUrl: './ProjectType-list.html',
})
export class ProjectTypeListComponent extends ProjectTypeComponent {}

@Component({
  selector: 'ProjectType-crud',
  templateUrl: './ProjectType-crud.html',
})
export class ProjectTypeCrudComponent extends ProjectTypeComponent {}
