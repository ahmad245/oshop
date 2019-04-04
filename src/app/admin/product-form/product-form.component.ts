import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import{ToastrService}from 'ngx-toastr';
// import * as bootbox from 'bootbox';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
category$;
products={};
id;
  constructor(
    private serviseCategory:CategoryService,
    private serviceProduct:ProductService,
    private router:Router,
    private toastr:ToastrService,
  private route:ActivatedRoute)
   {
    this.category$= serviseCategory.getCategory();
    }

  ngOnInit() {

   this.id=this.route.snapshot.paramMap.get('id');
    if(this.id)
   this.serviceProduct.getProductById(this.id).take(1).subscribe(
     e=>{ this.products=e;
     
    });
    
  }
  save(product)
  {
     if(this.id) this.serviceProduct.updateProduct(this.id,product)
     .then((success)=>{this.toastr.success("Product Created Success");}).
      catch((error)=>{this.toastr.error("Error To Add Porduct");});

     else this.serviceProduct.create(product).
     then((success)=>{this.toastr.success("Product Created Success");}).
     catch((error)=>{this.toastr.error("Error To Add Porduct");});

    this.router.navigate(['/admin/products']);
  }
  delete()
  {
    // bootbox.confirm("Are You Sur To Delete This Product",function(result)
    // {
    //   if(result)
    //   this.serviceProduct.delete(this.id);
    //   this.router.navigate(['/admin/products']);
    // });

    
    if(confirm("Are You Sur To Delete This Product"))
    {
      this.serviceProduct.delete(this.id);
      this.router.navigate(['/admin/products']);
      
    
     }
  }

}
