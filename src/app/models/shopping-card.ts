import { Observable } from 'rxjs';
import { shoppingCardItem } from "./shopping-card-item";
import { ProductService } from "../product.service";
import { product } from './product';

export class shoppingCard
{
    
     totalPrice:number;
    $key:string;
    dateCreated:Date;
    // product:Observable<product>;
    price:number;
    productIdTest:shoppingCardItem[]=[];
    
    constructor(public items:shoppingCardItem[],private serviceProduct:ProductService)
    {   
        for(let id in this.items)
        {
        this.productIdTest.push(new shoppingCardItem(id,this.items[id].quantity));
     
        };
        this.gettotalPrice();
      
        
    }
    get totalItems()
    {
        let sum=0;
        for(let id in this.items)
        {
         sum+=this.items[id].quantity; 
        
        }
        return sum;
    }

    gettotalPrice()
    { this.totalPrice=0;
        for(let item of this.productIdTest)
        {
           
            item.product=this.serviceProduct.getProductById(item.$key).
            map(pro=>
              {
                this.totalPrice+=item.quantity*pro.price;
      
                return pro;
              });
        }
    }
    
    
}

// get productId()
    // {
    //     console.log("productId");
    //  return   Object.keys(this.items);
    // }
    // getProductById(id):Observable<product>
    // {
    //     console.log("ahmad");
    //   return  this.product= this.serviceProducts.getProductById(id);
    // }