import { Component, OnInit, Input } from '@angular/core';
import { CrudFormComponent } from 'ngx-cabernet';

@Component({
  selector: 'Project',
  template: ''
})
export abstract class ProjectComponent extends CrudFormComponent implements OnInit {
  ProjectTypeList: any[];
  ProjectStatusList: any[];
  ConceptList: any[];
  ToolList: any[];
  
  


  ngOnInit(): void {
    this.entityName = "Project";
    this.identityKey = true;
    this.fillRecordListOnInit = false;
    this.setDetailList("ProjectExpense", "ProjectExpenseID", { 'ProjectExpenseID': 0,'ExpenseDate': new Date() });
    this.setDetailList("ProjectFile", "ProjectFileID");
    this.setCheckList("ProjectTool", "ToolList", "ToolID");
    this.setTagList("ProjectUser");

 this.onGetRecord.subscribe(record => this.deleteable = (record.ProjectExpense.length === 0)) ;

    

    this.onAddRecord.subscribe(record =>
      {
        record.ProjectStatusID = "NotStarted";
      })
    this.referenceData.push(
      { url: 'Api/ProjectType', listName: 'ProjectTypeList' },
      { url: 'Api/ProjectStatus', listName: 'ProjectStatusList' },
      { url: 'Api/Concept', listName: 'ConceptList' },
      { url: 'Api/Tool', listName: 'ToolList' },

    );

    
  
   

  }



  
}

@Component({
  selector: 'Project-list',
  templateUrl: './Project-list.html',
})
export class ProjectListComponent extends ProjectComponent { 
  ProjectUserList: any[] =[];  

  
}

@Component({
  selector: 'Project-crud',
  templateUrl: './Project-crud.html',
})
export class ProjectCrudComponent extends ProjectComponent { }
