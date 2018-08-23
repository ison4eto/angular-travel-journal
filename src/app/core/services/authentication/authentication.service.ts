import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string
  constructor(private toastr: ToastrService,
  private router: Router) { }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.login(email, password)
      })
      .catch(err =>{
        this.toastr.error(err.message, "Warning")
      })
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(data => {
      this.getToken()

      this.toastr.success('Logged In',"Success")
      this.router.navigate(['/stories/all'])

    })
    .catch(err =>{
      this.toastr.error(err.message, "Warning")
    })
  }

  logout() {
    firebase.auth().signOut()
    this.token = null
    this.router.navigate(['/register'])
  }

  getToken(){
    firebase.auth()
          .currentUser
          .getIdToken()
          .then(token =>{
            this.token = token
          });
    return this.token
  }
  getName(){
    const email =  firebase.auth()
      .currentUser
      .email
    const index = email.indexOf('@')
    return email.substr(0,index)
  }

  isAuthenticated() {
    return this.token != null
  }
}
