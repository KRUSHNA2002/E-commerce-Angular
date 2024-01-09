import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private api:ApiService,private router:Router){}

  loginForm=new FormGroup({
    'user_mobile':new FormControl(''),
    'user_password':new FormControl(''),
  })

  loginuser()
  {
    this.api.loginuser(this.loginForm.value).subscribe((res:any)=>{

      if(res.status=='success')
      {
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      }
      else{
        alert('Invalid Details');
      }
    })
  }
}
