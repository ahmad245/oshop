import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$;
  @Input('query')query;
  constructor(serviceCategory:CategoryService) 
  {
    this.category$ =serviceCategory.getCategory();
   }

  ngOnInit() {
  }

}
