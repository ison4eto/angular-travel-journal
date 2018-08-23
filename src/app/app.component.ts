import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDvomM7opgK-nH48TuxcA2U8g7r7S68FGI",
      authDomain: "travel-journal-project.firebaseapp.com"
    })
  }
}
