import { shoppingCardListOfItems } from './../models/shopping-card-IistOfItems';
import { ShoppingCartService } from './../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './../models/appUser';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/switchMap';
import { Router ,NavigationStart,NavigationEnd,NavigationError, RouterEvent, NavigationCancel} from '@angular/router';
import { shoppingCard } from '../models/shopping-card';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
 
  appUser:AppUser;
  total:number=0;
  products:Observable<shoppingCard>;
constructor(
  public serviceAuth:AuthService,
  private serviceUser:UserService,
  route:Router,
 
  private cardService:ShoppingCartService)
{ 
        serviceAuth.appUser$
       .subscribe(appuser=>this.appUser=appuser);
      
        
}
ngOnInit()
{
this.products=  this.cardService.getCard();
  //here we use object
  // this.cardService.getAllProductsAsList().subscribe(data=>
  //   {
      
     
      // let sum=0;
      // for (let index in  data.items) {
      //  sum+=data.items[index].quantity;
       
      // }
    //  this.total=data.Totalitem;
   
    // });
  // this.cardService.getAllProductsAsList().subscribe(data=>
  //   {
      
     
  //     // let sum=0;
  //     // for (let index in  data.items) {
  //     //  sum+=data.items[index].quantity;
       
  //     // }
  //    this.total=data.Totalitem;
   
  //   });
      
    //   let sum=0;
    //   for (let index in  data) {
    //    sum+=data[index].quantity;
       
    //   }
    //  this.total=sum;
   
    // });
    // here we use list
    // this.cardService.getAllProducts().subscribe(data=>
    //   {
    //     let sum=0;
    //     for (let index = 0; index < data.length; index++) {
    //      sum+=data[index].quantity;
    //     }
    //    this.total=sum;
     
    //   })
}

logout()
{
  this.serviceAuth.logout();
}

}


// constructor(private service:AuthService,private serviceUser:UserService)
// {
//    service.appUser.subscribe(userType=>this.appUser=userType)
//  }
// ngOnInit()
//  {
   
  
//  }

// logout()
// {
// this.service.logout();
// }