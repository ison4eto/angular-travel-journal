import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  bindingModel: User
  constructor(private authService: AuthenticationService,
  private toastr: ToastrService) { 
    this.bindingModel = new User('','','')
  }

  ngOnInit() {
  }

  register(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    const confirm = form.value.confirm
    if(password == confirm){
      this.authService.register(email, password)
    }else{
      this.toastr.error('Passwords should match!','Warning!')
    }
  }

}
