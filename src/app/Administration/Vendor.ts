import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Vendor',
  template: ''
})
export abstract class VendorComponent extends CrudFormComponent implements OnInit {

  ngOnInit(): void {
    this.entityName ="Vendor";
    this.identityKey = true;
    this.fillRecordListOnInit = false;

    this.referenceData.push(

    );

    this.fillRecordListOnInit = true;

  }


}

@Component({
  selector: 'Vendor-list',
  templateUrl: './Vendor-list.html',
})
export class VendorListComponent extends VendorComponent {}

@Component({
  selector: 'Vendor-crud',
  templateUrl: './Vendor-crud.html',
})
export class VendorCrudComponent extends VendorComponent {}
