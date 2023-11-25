import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

		@Component({
		  selector: 'ProjectStatus',
		  template: ''
		})
		export abstract class ProjectStatusComponent extends CrudFormComponent implements OnInit {

		  ngOnInit(): void {
			this.entityName ="ProjectStatus";
			this.referenceData.push(

			);

			this.fillRecordListOnInit = true;

		  }


		}

		@Component({
		  selector: 'ProjectStatus-list',
		  templateUrl: './ProjectStatus-list.html',
		})
		export class ProjectStatusListComponent extends ProjectStatusComponent {}

		@Component({
		  selector: 'ProjectStatus-crud',
		  templateUrl: './ProjectStatus-crud.html',
		})
		export class ProjectStatusCrudComponent extends ProjectStatusComponent {}
