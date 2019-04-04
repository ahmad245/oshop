import { AuthService } from './../auth.service';
import { order } from './../models/order-card';
import { shoppingCard } from './../models/shopping-card';
import { OrderServiceService } from './../order-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { shoppingCardItem } from '../models/shopping-card-item';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {

  orders={};
  card:shoppingCard;
  totalItem:number;
  totalPrice:number;
  subscribtionCard:Subscription;
  UserId:string;
  subscribtionUser:Subscription;

  constructor(
    private orderService:OrderServiceService,
    private cardService:ShoppingCartService,
    private router:Router,private auth:AuthService) { }

  ngOnInit() {
  this.subscribtionCard=  this.cardService.getCard().
    map(data=>
      { data.productIdTest.map(pro=>{pro.product.subscribe(a=>pro.productItem=a)})
          return data;}).subscribe(card=>this.card=card);
       
    this.subscribtionUser=  this.auth.user$.subscribe(data=>this.UserId= data.uid);    
  }

  ngOnDestroy()
  {
this.subscribtionCard.unsubscribe();
this.subscribtionUser.unsubscribe();
  }

   save()
  {
    let o=new order(this.card,this.orders,this.UserId);
    let ops=o.save();
 
      let va=  this.orderService.create(ops);
     
        this.router.navigate(['/order-success',va.key]);  
}
// clear()
// {
//   this.cardService.deletCard();
// }
}
 //  let ops=
  //     {
  //       dateCreated:new Date().getTime(),
  //       shipping:this.orders,
  //       items:  this.card.productIdTest.map(data=>
  //         {
  //           return{
  //             product:
  //             {
  //              title:data.productItem.title,
  //              imageUrl:data.productItem.imageUrl,
  //               price:data.productItem.price
  //              },  
  //              quantity:data.quantity ,
  //              totalPrice:data.quantity*data.productItem.price

             
  //           }

  //         })
       
          
  //       };