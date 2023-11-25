import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Concept',
  template: ''
})
export abstract class ConceptComponent extends CrudFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.entityName ="Concept";
    this.referenceData.push(
      	
    );
    
    this.fillRecordListOnInit = true;
    
  }
  

}

@Component({
  selector: 'Concept-list',
  templateUrl: './Concept-list.html',
})
export class ConceptListComponent extends ConceptComponent {}

@Component({
  selector: 'Concept-crud',
  templateUrl: './Concept-crud.html',
})
export class ConceptCrudComponent extends ConceptComponent {}
