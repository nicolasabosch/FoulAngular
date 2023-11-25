import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Customer',
  template: ''
})
export abstract class CustomerComponent extends CrudFormComponent implements OnInit {
  StateList: any[];

  ngOnInit(): void {
    this.entityName ="Customer";
    this.viewRecordOn1SearchResult =true;
    this.referenceData.push(
      	{url: 'Api/State', listName: 'StateList' },

    );
    
    this.onAddRecord.subscribe(record => {
      //record.CustomerID = '12345';
    })
    
    
  }
  

}

@Component({
  selector: 'Customer-list',
  templateUrl: './Customer-list.html',
})
export class CustomerListComponent extends CustomerComponent {}

@Component({
  selector: 'Customer-crud',
  templateUrl: './Customer-crud.html',
})
export class CustomerCrudComponent extends CustomerComponent {}
