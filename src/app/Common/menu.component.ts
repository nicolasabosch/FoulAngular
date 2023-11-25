import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CrudService} from 'ngx-cabernet';

import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';
@Component({
  styleUrls: ['./menu.component.css'],
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  UserMenuList: any[];
  LanguageID: string;
IsProduction : boolean = environment.production;

  constructor(
    private ref: ChangeDetectorRef,
    public crudService: CrudService,
    private router: Router,


  ) {

  }
  languageList: any[];
  siteTitle:any;
  ngOnInit(): void {
 if(!this.IsProduction)
    {
      this.crudService.query("Api/Login", {}).subscribe(data => {
        this.crudService.UserMenuList = data;
    })
    }
    this.crudService.getRecord("Parameter","SiteTitle").subscribe( data => 
      {
this.siteTitle = data.ParameterValue;
      })


    this.crudService.getRecordList("Language", {}).subscribe(data => {
      //var defaultLanguage = this.crudService.defaultLanguage;
      this.languageList = data;
      this.LanguageID = this.crudService.currentLanguageID;
    })

  }
  hideMenu() {
    setTimeout(
      function () {
        var elem = document.getElementsByClassName("navbar-collapse")[0];
        elem.classList.remove("show");
      }, 100);

  }

  changeLanguage(languageID: string): void {

    this.crudService.changeLanguage(this.LanguageID, true);

    this.crudService.getRecordList("Language", {}).subscribe(data => {

      this.languageList = data;

      this.LanguageID = languageID;

    })
  }

  logout() {
    this.crudService.logout();
    this.router.navigateByUrl('Login/' + this.crudService.currentLanguageID);
  }
}
