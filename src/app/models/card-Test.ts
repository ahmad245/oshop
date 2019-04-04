import { Observable } from 'rxjs/Observable';
import { product } from './product';
import { ProductService } from '../product.service';
import { forEach } from '@angular/router/src/utils/collection';
export class cardtest
{
    
    $key:string;
    quantity:number=10;
    product:Observable< product>; 
   
}