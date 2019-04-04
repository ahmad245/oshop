import { OrderServiceService } from './../../order-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders$:Observable<any[]>;
  constructor(private orderService:OrderServiceService) { }

  ngOnInit() {
   this.orders$=this.orderService.getOrders();
  }

}
