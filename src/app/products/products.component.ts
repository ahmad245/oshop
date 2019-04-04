import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:product[]=[];
  productFilter:product[]=[];
  query:string;
  
  constructor(private serviceProduct:ProductService ,private router: ActivatedRoute,private Toastr:ToastrService) 
  {

 }
 ngOnInit() {
 this.serviceProduct.getProducts().
 subscribe(data=>
    {
      this.products=data;

     this.router.queryParamMap.
     subscribe(param=>
      { 
         this.query=param.get('category');
         this.apllayFillter();
      }); 
      
    });       
}
private apllayFillter()
{
  this.productFilter= 
  (this.query) ? this.products.filter(p=>p.category===this.query) : this.products;
}

 input(search:string)
      {      if(!this.query)
         {
            this.productFilter= (search)?
            this.products.filter(a=>a.title.toLowerCase().includes(search.toLowerCase())):this.products;
          }
           else
           {
            this.productFilter= (search)?
            this.products.filter(a=>a.title.toLowerCase().includes(search.toLowerCase())&&a.category===this.query)
            :this.products.filter(c=>c.category===this.query);
           }
               
       }
       donat()
       {
       this.Toastr.info("You Can Not To Copy Or Paste");
         return false;
        // search.disabled;
       }
         

 

}

// serviceProduct.
        // getProducts().
        // switchMap(
        //   data=>
        //   {
        //     this.products=data;
        //     return router.queryParamMap;
        //   })
        //     .subscribe(param=>{this.query=param.get('category');
        //     this.productFilter= 
        //     (this.query) ? this.products.filter(p=>p.category===this.query) : this.products;});
        //   this.category$ =serviceCategory.getCategory();
// serviceProduct.getProducts().subscribe(data=>
//   {
//     this.products=data;
//     router.queryParamMap.subscribe(param=>{this.query=param.get('category');
//     this.productFilter= 
//     (this.query) ? this.products.filter(p=>p.category===this.query) : this.products;});

//   });