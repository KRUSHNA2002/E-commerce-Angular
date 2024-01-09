import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin=false;
  catlist:any;
  cart_count=0;

  constructor(private api:ApiService,private router:Router){

    if(localStorage.getItem('token'))
     this.islogin=true;
  }
  ngOnInit()
  {
    this.api.getcategorylist().subscribe((res:any)=>{
      this.catlist=res;
    })

    this.api.cart_list().subscribe((res:any)=>{
      this.cart_count=res.length;
    })
  }

  logout()
  { 
    if(confirm('Are you sure...'))
    {
    localStorage.clear();
    this.router.navigate(['/login']);
    }
  }
}
