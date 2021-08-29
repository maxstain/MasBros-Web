import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.afAuth.signOut();
  }

}
