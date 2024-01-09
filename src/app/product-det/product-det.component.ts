import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-det',
  templateUrl: './product-det.component.html',
  styleUrls: ['./product-det.component.scss']
})
export class ProductDetComponent implements OnInit {

  product_info:any;
  product_id=0;

  constructor(private api:ApiService,private activatedroute:ActivatedRoute,private router:Router){
  }

  ngOnInit()
  {
    this.activatedroute.params.subscribe((res:any)=>{
      this.product_id=res.pid;
      this.api.product_by_id(this.product_id).subscribe((res:any)=>{
        // console.log(res);
        this.product_info=res;
      })
    })
  }
  addcart()
  {
    if(localStorage.getItem('token'))
    {
      this.api.addtocart(this.product_id).subscribe((res:any)=>{
      this.ngOnInit();
      })

    }
    else
    {
       this.router.navigate(['/login']);
    }
  }
}
