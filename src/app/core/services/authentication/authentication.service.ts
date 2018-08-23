import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StoryFull } from '../../../components/stories/models/story-full';
import { Creator } from '../../../components/stories/models/creator';

const adminUID = 'beHxLPpoAhPTKGII6aH1vGr6jiJ2'

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
      .catch(err => {
        this.toastr.error(err.message, "Warning")
      })
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        this.getToken()

        this.toastr.success('Logged In', "Success")
        this.router.navigate(['/stories/all'])

      })
      .catch(err => {
        this.toastr.error(err.message, "Warning")
      })
  }

  logout() {
    firebase.auth().signOut()
    this.token = null
    this.router.navigate(['/register'])
  }
  getToken() {
    firebase.auth()
      .currentUser
      .getIdToken()
      .then(token => {
        this.token = token
      });
    return this.token
  }
  getEmail(): string {
    return firebase.auth()
      .currentUser
      .email

  }
  getName(): string {
    const email = this.getEmail()
    const index = email.indexOf('@')
    return email.substr(0, index)

  }
  getUserId(): string{
    return firebase.auth()
    .currentUser
    .uid
  }
  getUser(): Creator {
    return {
      'id': this.getUserId(),
      'email': this.getEmail(),
      'name': this.getName()
    }
  }

  isAuthenticated(): boolean {
    return this.token != null
  }

  isCreator(story: StoryFull): boolean{
    return this.getUserId() === story.creator.id
  }

  isAdmin(): boolean{
    return adminUID === this.getUserId() 
  }
}
