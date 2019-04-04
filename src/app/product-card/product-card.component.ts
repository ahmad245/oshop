import { product } from './../models/product';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,OnDestroy {

  @Input('item')item;
  product:number;
  subscription:Subscription;
  constructor(private cardService:ShoppingCartService) { }

  ngOnInit() {
    this.subscription=  this.cardService.getProduct(this.item).
    subscribe(data=>{   data.quantity ? this.product=data.quantity:this.product=0;});
  }
  addToCard(item:product)
  {
   this.cardService.addToCard(item);
  }
  removeFromCard(item:product)
  {
     this.cardService.removeFromCard(item);
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
