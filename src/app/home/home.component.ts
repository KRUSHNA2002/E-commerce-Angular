import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
   slider_data:any;
   category_data:any;
   best_seller:any;
   loading=true;
   constructor(private api:ApiService){}
   ngOnInit()
   {
     this.api.getsliderlist().subscribe((res:any)=>{
      // console.log(res);
      this.slider_data=res;
     })

     this.api.getcategorylist().subscribe((res:any)=>{
      this.category_data=res;
     })


    this.api.getbestsellerlist().subscribe((res:any)=>{
      this.best_seller=res;
      this.loading=false;

    })



    
   }
}
