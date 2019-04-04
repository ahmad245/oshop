import { cardtestList } from './../models/card-test-List';
import { cardtest } from './../models/card-Test';
import { element } from 'protractor';
import { ProductService } from './../product.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { shoppingCardItem } from '../models/shopping-card-item';
import { Subscription } from 'rxjs';
import { product } from '../models/product';
import { shoppingCardListOfItems } from '../models/shopping-card-IistOfItems';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { shoppingCard } from '../models/shopping-card';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnDestroy {
  
  count:number=0;
  subscrip:Subscription;
  totalPrice:number=0;
  cardList:any[];
  length:number;
  product:product[]=[];
  product$:Observable<any[]>;
  products$:Observable<any[]>;
  test :cardtestList;
  card$:Observable<shoppingCard>
  nu:number;
 
  constructor(private cardService:ShoppingCartService,public serviceProduct:ProductService) { }

  ngOnInit() {
    
   this.card$= this.cardService.getCard();
 
 }
 addToCard(item:product)
 {

  this.cardService.addToCard(item);
 }
 removeFromCard(item:product)
 {
    this.cardService.removeFromCard(item);
 }
 clearCard()
 {
   this.cardService.deletCard();
 }
 
 retunTo()
 {

 }


  ngOnDestroy()
  {
    //  this.subscrip.unsubscribe();
  }

}

 //  map(data=>
  //   {   
  //     this.totalPrice=0;
  //     for(let item of data.productIdTest)
  //    {
  //     item.product=this.serviceProduct.getProductById(item.$key).
  //     map(pro=>
  //       {
  //         this.totalPrice+=item.quantity*pro.price;

  //         return pro;
  //       });
  //    } 
  //     return data
  //   });
      
    

///////////////////////////////////point very important ///////////////////////////////////////

//    this.product$=this.cardService.getAllProductsAsListfortest()
// .map(products=>
//     {   
//          products.map(data=>{
//             this.totalPrice=0;
//              data.product= this.serviceProduct.getProductById(data.$key).
//                  map(p=>
//                   { 
//                     this.totalPrice+=data.quantity*p.price;
//                     return p;
//                   });
//                    this.count+=data.quantity;
//                             });
                          
//                 return products;
//     });
  //////////////////////////////////////////////////////////////////////////////////////////////////
    // subscribe(data=>
    //   {
    //     this.cardList=data;
    //      for (let index = 0; index < data.length; index++) {
    //        const element = data[index].$key;
    //        this.serviceProduct.getProductById(element).
    //        subscribe(data=>{this.product.push(data);});

    //      }
    //   });



 // this.subscrip=  this.cardService.getAllProductsAsList()
  // .subscribe(data=>
  //   {
  //     this.length=data;
                      
  //     this.items$=data;
      
  //     console.log(data.items);
  //     let priceSum=0;
  //     let sum=0;
  //         for (let index in data.items) {
         //  sum+=data.items[index].quantity;
        //   priceSum+=data.items[index].product.price*data.items[index].quantity;
       //   }
        // this.count=sum;
      //  this.count=data.Totalitem;
       //  this.totalPrice=priceSum;
    //  this.items$=data;
    //  let priceSum=0;
    //  let sum=0;
    //      for (let index = 0; index < data.length; index++) {
    //       sum+=data[index].quantity;
    //       priceSum+=data[index].product.price*data[index].quantity;
    //      }
    //     this.count=sum;
    //     this.totalPrice=priceSum;
