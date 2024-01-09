import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order-address',
  templateUrl: './confirm-order-address.component.html',
  styleUrls: ['./confirm-order-address.component.scss']
})
export class ConfirmOrderAddressComponent {

  constructor(private api:ApiService,private router:Router){}

  addressForm=new FormGroup({
    "area":new FormControl(""),
    "city":new FormControl(""),
    "district":new FormControl(""),
    "state":new FormControl("Maharastra"),
    "country":new FormControl("India"),
    "pincode":new FormControl(""),
    "payment_type":new FormControl(""),
  });

placeorder()
{
  console.log(this.addressForm.value);
  this.api.place_order(this.addressForm.value).subscribe((res:any)=>{
    console.log(res);
    if(res.status=='success')
    {
          alert("order Placed");
          this.router.navigate(['/']);

    }
    else
    {
          alert("Failed");
    }
  });
}

}
