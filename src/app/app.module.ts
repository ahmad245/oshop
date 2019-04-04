import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule}from 'angularfire2';
import{AngularFireDatabaseModule}from 'angularfire2/database';
import{AngularFireAuthModule}from 'angularfire2/auth';
import{RouterModule , Routes}from '@angular/router';
import{NgbModule}from '@ng-bootstrap/ng-bootstrap';
import {FormsModule}from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import{DataTableModule}from 'angular5-data-table';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{ToastrModule}from 'ngx-toastr';





import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGardService } from './auth-gard.service';
import { UserService } from './user.service';
import { AdminAuthGardService } from './admin-auth-gard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderServiceService } from './order-service.service';
import { ShoppingCardSummaryComponent } from './shopping-card-summary/shopping-card-summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
const route:Routes=
[
  {path:'',component:ProductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'login',component:LoginComponent},

  {path:'check-out',component:CheckOutComponent},
  {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthGardService]},
  {path:'order-success/:id',component:OrderSuccessComponent,canActivate:[AuthGardService]},

  {path:'details/:id',component:OrderDetailsComponent},
  {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthGardService,AdminAuthGardService]},
  {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthGardService,AdminAuthGardService]},
  {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGardService,AdminAuthGardService]},
  {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGardService,AdminAuthGardService]},




]

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ShoppingCardSummaryComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
   
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(route),
    NgbModule.forRoot(),
     
    
  ],
  providers: [
    AuthService,
     AuthGardService,
      UserService,
       AdminAuthGardService, 
       CategoryService,
        ProductService,
        ShoppingCartService,
        OrderServiceService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
