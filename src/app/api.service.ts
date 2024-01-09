import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseurl='https://a2zithub.org/dairy/abi/';
  getsliderlist()
  {
    return this.http.get(this.baseurl+'slider_det');
  }

  getcategorylist()
  {
    return this.http.get(this.baseurl+'product_cat_details');
  }
  getbestsellerlist()
  {
    return this.http.get(this.baseurl+'product_det');
  }

  resisteruser(obj:any)
  {
    return this.http.post(this.baseurl+'user_register',obj);
  }

  loginuser(obj:any)
  {
    return this.http.post(this.baseurl+'user_login',obj);
  }

  products_by_cat_id(cat_id:any)
  {
    var obj={'cat_id':cat_id};
    return this.http.post(this.baseurl+'products_by_cat',obj);
  }

  product_by_id(pid:any)
  {
    var obj={'product_id':pid,'token':localStorage.getItem('token')};
    return this.http.post(this.baseurl+'product_by_id',obj);
  }
  addtocart(pid:any)
  {
    var obj={'product_id':pid,'token':localStorage.getItem('token')};
    return this.http.post(this.baseurl+'addtocart',obj);
  }

  cart_list()
  {
    var obj={'token':localStorage.getItem('token')};
    return this.http.post(this.baseurl+'cart_list',obj);
  }

  inc_cart_qty(product_econ_cart_id:any)
  {
    var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
    return this.http.post(this.baseurl+'inc_cart_qty',obj);
  }

  dec_cart_qty(product_econ_cart_id:any)
  {
    var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
    return this.http.post(this.baseurl+'dec_cart_qty',obj);
  }
  remove_cart_qty(product_econ_cart_id:any)
  {
    var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
    return this.http.post(this.baseurl+'remove_cart_qty',obj);
  }

  place_order(obj:any)
  {
    obj.token = localStorage.getItem('token');
    return this.http.post(this.baseurl+'place_order',obj);
  }

  order_det(order_id:any)
  {
    var obj={'token':localStorage.getItem('token'),'order_id':order_id};
    return this.http.post(this.baseurl+'order_det',obj);
  }
}
