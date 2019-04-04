import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from './../order-service.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
order={};
  constructor(private orderService:OrderServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
 let id=   this.route.snapshot.paramMap.get('id');
 if(id)
 this.orderService.getOrderById(id).take(1).subscribe(data=>
  {this.order=data;console.log(data);
  });

  }

}
