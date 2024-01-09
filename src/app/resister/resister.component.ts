import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.scss']
})
export class ResisterComponent {

  constructor(private api:ApiService,private router:Router){}

  userForm=new FormGroup({
    'user_name':new FormControl(''),
    'user_mobile':new FormControl(''),
    'user_email':new FormControl(''),
    'user_password':new FormControl(''),
  })

  resisteruser()
  {
    this.api.resisteruser(this.userForm.value).subscribe((res:any)=>{
      
      if(res.status=='success')
      {
         this.router.navigate(['/login']);
      }
      else
      {
        alert('Invalid Details');
      }
    })
  }

}
