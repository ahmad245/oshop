import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'




@Injectable()
export class AdminAuthGardService  implements CanActivate {
 
    constructor(private serviceAuth:AuthService,private seviseUser:UserService)
    {

    }
    canActivate()
    {
     return   this.serviceAuth.appUser$
      .map(appUser=>appUser.isAdmin);
               
    }
  
  

}





// constructor(private serviceUser:UserService,private serviceAuth:AuthService) { }
// canActivate()
// {
//   return   this.serviceAuth.appUser
//     .map(appUser=>appUser.isAdmin);

//  }