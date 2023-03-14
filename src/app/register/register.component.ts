import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {

  }
  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false)
  })

  proceedregisteration() {
    if (this.registerForm.valid) {
      this.service.Proceedregister(this.registerForm.value)
        .subscribe(res => {
          this.toastr.success('please contact for Admin for enbale  access', 'Registered successfully')
          this.router.navigate(['login']);
        });

    } else {
      this.toastr.warning('please enter the Valid data');

    }
  }

}
