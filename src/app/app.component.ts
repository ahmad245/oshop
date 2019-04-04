import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router ,NavigationStart,NavigationEnd,NavigationError, RouterEvent, NavigationCancel, Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show=true;
constructor(private serviceAuth:AuthService,private route:Router,userservice:UserService)
{
//localStorage.removeItem('cardId');
     serviceAuth.user$.subscribe(user=>
          {
            if(user)
           {
            userservice.save(user);
             let url=localStorage.getItem('returnUrl');
             if(url)
             {
               localStorage.removeItem('returnUrl');
               route.navigateByUrl(url);
             }
          
          } 
          });
          route.events.subscribe((data:Event)=>
          {
            if(data instanceof NavigationStart)
              {this.show=true;}  
            if(data instanceof NavigationEnd)
            {this.show=false;} 
            
   
          });
         

}
}




// constructor(private route:Router,authService:AuthService,userservice:UserService)
// {
//    authService.UserName$.subscribe(user=>
//      {
//        if(user)
//        {
//          //insert user to fire database
//          userservice.save(user);

//          let url=localStorage.getItem('returnUrl');
//          route.navigateByUrl(url);
//        }
      
//      });
 
// }
