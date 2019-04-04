import { product } from './../../models/product';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataTableResource}from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit ,OnDestroy{
products:product[];
filterProduct:any[];
subscribe:Subscription;
tableResource:DataTableResource<product>;
items:product[]=[];
itemCount:number;
  constructor(private serviceProduct:ProductService) 
  {
   this.subscribe= this.serviceProduct.getProducts().
   subscribe( a=> 
    { this.filterProduct= this.products=a;
    this.intializeTable(a);
    });
   }

  ngOnInit() {


  }
  private intializeTable(parameter:product[])
  {
    this.tableResource=new DataTableResource(parameter);
    this.tableResource.query({offset:0}).then(item=>this.items=item);
    this.tableResource.count().then(count=>this.itemCount=count);
  }
  reloadItems(params)
  {
    if(!this.tableResource)return;
    this.tableResource.query(params).then(item=>this.items=item);

  }

  filtter(search:string)
  {
    
    this.filterProduct=(search)?
     this.products.filter(a=>a.title.toLowerCase().includes(search.toLowerCase())):
     this.products;

     this.intializeTable(this.filterProduct);
    
  }
  ngOnDestroy()
  {
    this.subscribe.unsubscribe();
    
  }

}
