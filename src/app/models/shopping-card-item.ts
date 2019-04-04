import { ProductService } from './../product.service';
import { product } from "./product";
import { Observable } from "rxjs";

export class shoppingCardItem
{ 
        // $key:string;
    // product:product;
    // quantity:number;
   product:Observable< product>; 
    productItem:product;
    constructor(public $key:string,public quantity:number)
    {
      //  this.productService.getProductById($key).subscribe(d=>{this.productItem=d});
    }
  
}