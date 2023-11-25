import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportService } from 'ngx-cabernet';
import { slideInAnimation } from './../route-animation';

@Component({
  selector: 'app',
  templateUrl: './report.component.html',

  animations: [slideInAnimation]
})
export class ReportComponent implements AfterViewInit {
  table: any[];
  
  sourceIndex: number =-1;
  destinationIndex: number =-1;


  onDragStart(index:number):void
  {
      this.sourceIndex = index;
      console.log(index);
  }

  onDragEnter(index:number):void
  {
      this.destinationIndex = index;
      console.log(index);
  }


  onDragEnd(): void
  {
    //var sourceColumn = JSON.parse(JSON.stringify( this.table[this.sourceIndex]));
    var sourceColumn = this.table[this.sourceIndex];
    this.table.splice(this.sourceIndex,1);
    this.table.splice(this.destinationIndex,0,sourceColumn );

    //alert(this.sourceIndex.toString() + " - " + this.destinationIndex.toString()) 
  }

  
  constructor(public report: ReportService) {
    this.table = [
      { ColumnText: 'Países', FieldName: 'CountryName', DataType: 'String' },
      { ColumnText: 'Empresa', FieldName: 'CompanyName', DataType: 'String' },
      { ColumnText: 'Categoría', FieldName: 'ProductCategoryName', DataType: 'String' },
      { ColumnText: 'Producto', FieldName: 'ProductName', DataType: 'String' },
      { ColumnText: 'Monto', FieldName: 'InvoicingAmount', DataType: 'Decimal', Format: "1.2-2",Formula:[] },
      { ColumnText: 'Nro', FieldName: 'ProcessNumber', DataType: 'Integer' }


    ]

  }



  ngAfterViewInit(): void {
    //setTimeout(() => {

    fetch('assets/reportLong.json')
      .then(response => response.json())
      .then(data => {
        this.report.data = data;
        this.report.filteredData = data;
        //        this.report.setFullHeight();

      })
    //}, 0);

  }
  public isLogedIn() {
    return false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
