import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { product } from './models/product';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) 
  { }

  create(product)
  {
   return this.db.list('/products').push(product);
  }

  getProducts()
  {
   return  this.db.list('/products');
  }

  getProductById(id):Observable<product>
  {
   console.log("return product By Id");
    return this.db.object('/products/'+id);
  }

  updateProduct(id,product)
  {
    return this.db.object('/products/'+id).update(product);
    
  }

  delete(id)
  {
    return this.db.object('/products/'+id).remove();
  }
}
