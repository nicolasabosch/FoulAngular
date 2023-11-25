import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CrudService } from 'ngx-cabernet';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private crudService: CrudService, private router: Router
    ) {}

    canActivate() {
        
 if (!environment.production)
      return true;
        if (this.crudService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['Login']);
            return false;
        }
    }
}