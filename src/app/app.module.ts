

import { DataTableListComponent, DataTableCrudComponent } from './Security/DataTable';
import { DataTranslationComponent } from './Security/DataTranslation';
import { LanguageListComponent, LanguageCrudComponent } from './Security/Language';
import { MenuBarListComponent, MenuBarCrudComponent } from './Security/MenuBar';
import { MenuItemListComponent, MenuItemCrudComponent } from './Security/MenuItem';
import { ParameterListComponent, ParameterCrudComponent } from './Security/Parameter';
import { RoleListComponent, RoleCrudComponent } from './Security/Role';
import { TextTranslationComponent } from './Security/TextTranslation';
import { UserListComponent, UserCrudComponent } from './Security/User';

import { ToolListComponent, ToolCrudComponent } from './Administration/Tool';
import { ConceptListComponent, ConceptCrudComponent } from './Administration/Concept';
import { ProjectListComponent, ProjectCrudComponent } from './Administration/Project';
import { CustomerListComponent, CustomerCrudComponent } from './Administration/Customer';
import { StateListComponent, StateCrudComponent } from './Administration/State';
import { VendorListComponent, VendorCrudComponent } from './Administration/Vendor';
import { ProjectTypeListComponent, ProjectTypeCrudComponent } from './Administration/ProjectType';
import { ProjectStatusListComponent, ProjectStatusCrudComponent } from './Administration/ProjectStatus';
import { ZoneListComponent, ZoneCrudComponent } from './Administration/Zone';
import { TeamListComponent, TeamCrudComponent } from './Administration/Team';
import { ReportComponent } from './test/report.component';

import { MatchListComponent, MatchCrudComponent } from './Administration/Match';
import { MyMatchListComponent, MyMatchCrudComponent } from './Administration/MyMatch';

import { MatchStatusListComponent, MatchStatusCrudComponent } from './Administration/MatchStatus';

import { NgxCabernetModule } from 'ngx-cabernet';
import { CustomDateParserFormatter, DatePickerAdapter } from 'ngx-cabernet';
import { DynamicLocaleService } from 'ngx-cabernet';
import { LocaleService } from 'ngx-cabernet';
import { LoaderInterceptor } from 'ngx-cabernet';
import { MenuComponent } from './Common/menu.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/authguard';
import { ChangePasswordComponent } from './login/change-password.component';
import { GeneratePasswordComponent } from './login/generate-password.component';
import { ResetPasswordRequestComponent } from './login/reset-password-request.component';


import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule, NgbActiveModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';



import { registerLocaleData, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

import localeES from '@angular/common/locales/es';
import localeEN from '@angular/common/locales/en';
import localePT from '@angular/common/locales/pt';;



registerLocaleData(localeES, 'es');
registerLocaleData(localePT, 'pt');
registerLocaleData(localeEN, 'en');







const appRoutes: Routes = [



  { path: 'TextTranslation', component: TextTranslationComponent, data: { animation: 'TextTranslation' }, canActivate: [AuthGuard] },
  { path: 'DataTranslation', component: DataTranslationComponent, data: { animation: 'DataTranslation' }, canActivate: [AuthGuard] },


  { path: 'Language', component: LanguageListComponent, data: { animation: 'Language' }, canActivate: [AuthGuard] },
  { path: 'Language/:id', component: LanguageCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'DataTable', component: DataTableListComponent, data: { animation: 'DataTable' }, canActivate: [AuthGuard] },
  { path: 'DataTable/:id', component: DataTableCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },
  { path: 'Parameter', component: ParameterListComponent, data: { animation: 'ParameterListComponent' }, canActivate: [AuthGuard] },
  { path: 'Parameter/:id', component: ParameterCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },


  { path: 'MenuBar', component: MenuBarListComponent, data: { animation: 'MenuBarListComponent' }, canActivate: [AuthGuard] },
  { path: 'MenuBar/:id', component: MenuBarCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'MenuItem', component: MenuItemListComponent, data: { animation: 'MenuItemListComponent' }, canActivate: [AuthGuard] },
  { path: 'MenuItem/:id', component: MenuItemCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Role', component: RoleListComponent, data: { animation: 'm' }, canActivate: [AuthGuard] },
  { path: 'Role/:id', component: RoleCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },


  { path: 'User', component: UserListComponent, data: { animation: 'User' }, canActivate: [AuthGuard] },
  { path: 'User/:id', component: UserCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'ChangePassword', component: ChangePasswordComponent, data: { animation: 'User' }, canActivate: [AuthGuard] },
  { path: 'ResetPasswordRequest', component: ResetPasswordRequestComponent, data: { animation: 'User' } },
  { path: 'GeneratePassword/:id', component: GeneratePasswordComponent, data: { animation: 'User' } },

  { path: 'Login', component: LoginComponent, data: { animation: 'Login' } },
  { path: 'Login/:id', component: LoginComponent, data: { animation: 'Login' } },

  { path: 'Tool', component: ToolListComponent, data: { animation: 'Tool' }, canActivate: [AuthGuard] },
  { path: 'Tool/:id', component: ToolCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Concept', component: ConceptListComponent, data: { animation: 'Concept' }, canActivate: [AuthGuard] },
  { path: 'Concept/:id', component: ConceptCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Project', component: ProjectListComponent, data: { animation: 'Project' }, canActivate: [AuthGuard] },
  { path: 'Project/:id', component: ProjectCrudComponent, data: { animation: 'CRUD' }},

  { path: 'Customer', component: CustomerListComponent, data: { animation: 'Customer' }, canActivate: [AuthGuard] },
  { path: 'Customer/:id', component: CustomerCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'State', component: StateListComponent, data: { animation: 'State' }, canActivate: [AuthGuard] },
  { path: 'State/:id', component: StateCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'ProjectType', component: ProjectTypeListComponent, data: { animation: 'ProjectType' }, canActivate: [AuthGuard] },
  { path: 'ProjectType/:id', component: ProjectTypeCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  
  { path: 'ProjectStatus', component: ProjectStatusListComponent, data: { animation: 'ProjectStatus' }, canActivate: [AuthGuard] },
  { path: 'ProjectStatus/:id', component: ProjectStatusCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Match', component: MatchListComponent, data: { animation: 'Match' }, canActivate: [AuthGuard] },
  { path: 'Match/:id', component: MatchCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'MyMatch', component: MyMatchListComponent, data: { animation: 'Match' }, canActivate: [AuthGuard] },
  { path: 'MyMatch/:id', component: MyMatchCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  
  { path: 'MatchStatus', component: MatchStatusListComponent, data: { animation: 'MatchStatus' }, canActivate: [AuthGuard] },
  { path: 'MatchStatus/:id', component: MatchStatusCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Vendor', component: VendorListComponent, data: { animation: 'Vendor' }, canActivate: [AuthGuard] },
  { path: 'Vendor/:id', component: VendorCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },

  { path: 'Zone', component: ZoneListComponent, data: { animation: 'ZoneListComponent' }, canActivate: [AuthGuard] },
  { path: 'Zone/:id', component: ZoneCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },
  { path: 'Team', component: TeamListComponent, data: { animation: 'TeamListComponent' }, canActivate: [AuthGuard] },
  { path: 'Team/:id', component: TeamCrudComponent, data: { animation: 'CRUD' }, canActivate: [AuthGuard] },
  { path: 'Report', component: ReportComponent, data: { animation: 'Login' } },

  { path: '', redirectTo: 'Login', pathMatch: 'full' },






  { path: '**', redirectTo: 'd' }
];



@NgModule({
  declarations: [

    ToolCrudComponent,
    ToolListComponent,
    ConceptCrudComponent,
    ConceptListComponent,
    ProjectCrudComponent,
    ProjectListComponent,
    CustomerCrudComponent,
    CustomerListComponent,
    StateCrudComponent,
    StateListComponent,
    ProjectTypeCrudComponent,
    ProjectTypeListComponent,
    ProjectStatusCrudComponent,
    ProjectStatusListComponent,
    VendorCrudComponent,
    VendorListComponent,
    ReportComponent,
    TextTranslationComponent,
    DataTranslationComponent,
    LanguageCrudComponent,
    LanguageListComponent,
    DataTableCrudComponent,
    DataTableListComponent,
    MenuComponent,

    UserCrudComponent,
    UserListComponent,
    ParameterCrudComponent,
    ParameterListComponent,

    ZoneCrudComponent,
    ZoneListComponent,
    TeamCrudComponent,
    TeamListComponent,

    MatchCrudComponent,
    MatchListComponent,
    MyMatchCrudComponent,
    MyMatchListComponent,
    MatchStatusCrudComponent,
    MatchStatusListComponent,
    AppComponent,


    MenuBarCrudComponent,
    MenuBarListComponent,
    MenuItemCrudComponent,
    MenuItemListComponent,
    RoleListComponent,
    RoleCrudComponent,

    LoginComponent,
    ChangePasswordComponent,
    GeneratePasswordComponent,
    ResetPasswordRequestComponent,




  ],

  imports: [

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, relativeLinkResolution: 'legacy' }
    ),
    HttpClientModule,
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,



    NgbModule,
    NgxCabernetModule,


  ],
  providers: [
    AuthGuard,
    NgbModule,
    NgbActiveModal,
    NgbTooltip,
    LocaleService,
    DynamicLocaleService,

    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,

    { provide: NgbDateAdapter, useClass: DatePickerAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },

    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (LocaleService: { locale: string; }) => LocaleService.locale
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}


