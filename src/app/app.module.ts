import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IncludeModule } from './include/include.module';
import { HttpClientModule } from '@angular/common/http';
import { ResisterComponent } from './resister/resister.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetComponent } from './product-det/product-det.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderAddressComponent } from './confirm-order-address/confirm-order-address.component';
import { OrderDetComponent } from './order-det/order-det.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResisterComponent,
    LoginComponent,
    ProductsComponent,
    ProductDetComponent,
    CartComponent,
    ConfirmOrderAddressComponent,
    OrderDetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncludeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
