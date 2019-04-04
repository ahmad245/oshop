import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGardService  implements CanActivate  {
  
    constructor(private serviceAuth:AuthService,private route:Router){}
    canActivate(route,state:RouterStateSnapshot)
    {
      return    this.serviceAuth.user$.map(user=>
            {
                if(user) return true;
                
                this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
                 
                return false;
            });
            
           
    }
  
}



// constructor(private serveice:AuthService,private route:Router) { }
//   canActivate(routet,state:RouterStateSnapshot)
//   {
//   return this.serveice.UserName$.map(user=>
//     {
//       if(user)return true;
//       this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
//       return false;
//     })
  
      
      
    
 
//   }
