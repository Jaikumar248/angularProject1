import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service:AuthService, private router:Router ) {
      localStorage.clear();
  }
  userdata:any;
  loginForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('', Validators.required)
  })

  proceedlogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.service.GetBycode(this.loginForm.value.username).subscribe(res => { 
        this.userdata = res;
        console.log(this.userdata)
        if(this.userdata.password === this.loginForm.value.password) {
          if(this.userdata.isActive){
            localStorage.setItem('username',this.userdata.id);
            localStorage.setItem('userrole', this.userdata.role);
            this.router.navigate([''])
          }else {
            this.toastr.error('please contact admin ', 'user is In Active')
          }

        } 
        else {
          this.toastr.error('Invalid credentials')
        }
      })

    }
  }
}
