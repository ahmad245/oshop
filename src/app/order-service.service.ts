import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderServiceService {

  constructor(private db:AngularFireDatabase,private cardService:ShoppingCartService) { }
  create(order)
  {
    
     let result= this.db.list('/orders').push(order);
     this.cardService.deletCard();
     return result;
  }
  getOrders()
  {
    return this.db.list('/orders');
  }
  getOrderById(id:string)
  {
    return this.db.object('/orders/'+id);
  }
  getOrderByUserId(Ui:string)
  {
   return this.db.list('/orders',
    {
      query:{
        orderByChild:'user',
        equalTo:Ui
      }
    });
  }
  

}
