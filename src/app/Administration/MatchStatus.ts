import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

		@Component({
		  selector: 'MatchStatus',
		  template: ''
		})
		export abstract class MatchStatusComponent extends CrudFormComponent implements OnInit {

		  ngOnInit(): void {
			this.entityName ="MatchStatus";
			this.referenceData.push(

			);

			this.fillRecordListOnInit = true;

		  }


		}

		@Component({
		  selector: 'MatchStatus-list',
		  templateUrl: './MatchStatus-list.html',
		})
		export class MatchStatusListComponent extends MatchStatusComponent {}

		@Component({
		  selector: 'MatchStatus-crud',
		  templateUrl: './MatchStatus-crud.html',
		})
		export class MatchStatusCrudComponent extends MatchStatusComponent {}
