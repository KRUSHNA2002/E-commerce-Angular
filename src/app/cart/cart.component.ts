import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 cart_data:any;
 loading=true;

  constructor(private api:ApiService){}

  ngOnInit()
  {
    this.api.cart_list().subscribe((res:any)=>{
      this.cart_data=res;
      this.loading=false;

    })
  }

  incqty(product_econ_cart_id:any)
  {
    this.api.inc_cart_qty(product_econ_cart_id).subscribe((res:any)=>{

      this.ngOnInit();
    });
  }
  
  decqty(product_econ_cart_id:any)
  {
    this.api.dec_cart_qty(product_econ_cart_id).subscribe((res:any)=>{

      this.ngOnInit();
    });
  }

  removeproduct(product_econ_cart_id:any)
  {
    this.api.remove_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
    });
    this.ngOnInit();
  }

}
