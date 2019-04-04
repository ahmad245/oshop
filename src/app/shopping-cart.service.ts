import { ProductService } from './product.service';
import { cardtestList } from './models/card-test-List';
import { cardtest } from './models/card-Test';
import { Observable } from 'rxjs/Observable';
import { async } from '@angular/core/testing';
import { product } from './models/product';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { shoppingCardItem } from './models/shopping-card-item';
import { shoppingCardListOfItems } from './models/shopping-card-IistOfItems';
import { shoppingCard } from './models/shopping-card';



@Injectable()
export class ShoppingCartService {
  constructor(private db:AngularFireDatabase,private productsServis:ProductService) 
  { }
  /////////////////////////////////////////////
private createCard()
{
return  this.db.list('/shopping-cart').push({dateCreated:new Date().getTime()});
}
public deletCard()
{let cardId=this.getOrCreateCard();
  this.db.object('/shopping-cart/'+cardId+'/items').remove();
}
/////////////////////////////////////
public getCard():Observable<shoppingCard>
{
  let cardId=this.getOrCreateCard();
  return this.db.object('/shopping-cart/'+cardId).
  map(x=>new shoppingCard(x.items,this.productsServis));
}

////////////////////////////////////////////////
private getOrCreateCard()
{
  let cardId=localStorage.getItem('cardId');
  if(!cardId)
  {
    let result=this.createCard();
    localStorage.setItem('cardId',result.key);
    return result.key;
  }
  else
  return cardId;
}
/////////////////////////////////////////////////////////

 getProduct(product:product)
{
  let cardId=this.getOrCreateCard();
  return this.db.object('/shopping-cart/'+cardId+'/items/'+product.$key);
}

addToCard(product:product)
{
  let item$=  this.getProduct(product);
   item$.take(1).subscribe(item=>
    {
      if(item.$exists())
      {
        item$.update({quantity:item.quantity+1});
      }
      else
      {
        item$.update({quantity:1});
      }
    });
}
removeFromCard(product:product)
{
  let item$=  this.getProduct(product);
   item$.take(1).subscribe(item=>
    {
     
      if(item.quantity===1)
      item$.remove();
      else 
      item$.update({quantity:item.quantity-1}); 
      console.log(item.quantity);
    });
}

  
}
















// create()
//   {
//    return this.db.list('/shopping-cart').
//     push({dateCreated:new Date().getTime()});
//   }

//   getCard(id:string)
//   {
//      return this.db.object('/shopping-cart/'+id);
//   }

//    getOrCreate()
//   {
  
//    let cardId= localStorage.getItem('cardId');
//    if(!cardId)
//    {
//        let data=  this.create();
        
//            localStorage.setItem('cardId',data.key);
//            console.log(data.key);
//            return data.key;
//            }
//    else 
//    return cardId;

//   }
//  async addTocard(product:product)
//   {
   
//       let cardId=await this.getOrCreate();
//       console.log(cardId);
      
//      let item$= this.db.object('/shopping-cart/'+cardId+'/item/'+product.$key);
       
//        item$.take(1).subscribe(item=>
//           {
//             if(item.$exists())
//             {
//              item$ .update({quantity:item.quantity+1});
            
//             }
//             else
//            item$.set({product:product,quantity:1});
//           })
         
         
      
//   }
