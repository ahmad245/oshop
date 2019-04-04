import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { OrderServiceService } from './../order-service.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
order$:Observable<any>;
  constructor(private orderService:OrderServiceService,private auth:AuthService) { }

  ngOnInit() {
 this.order$= this.auth.user$.switchMap(data=>
    this.orderService.getOrderByUserId(data.uid)
  );
  }

}
