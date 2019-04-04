import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { shoppingCard } from '../models/shopping-card';

@Component({
  selector: 'app-shopping-card-summary',
  templateUrl: './shopping-card-summary.component.html',
  styleUrls: ['./shopping-card-summary.component.css']
})
export class ShoppingCardSummaryComponent implements OnInit {
  card$:Observable<shoppingCard>;
  @Input('card') card:shoppingCard;
  constructor( private cardservice:ShoppingCartService) 
  {
   this.card$=cardservice.getCard();
   }

  ngOnInit() {
  }

}
