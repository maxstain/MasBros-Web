import { UserService } from './../Users/user.service';
import { User } from './../Users/user';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  firebaseErrorMessage: string;
  user: User = new User();
  date = new Date();
  submitted = false;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private userService: UserService) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'displayName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'createdAt': new FormControl(this.date.toDateString())
    });
  }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.signupUser(this.signupForm.value).then((result) => {
      if (result == null) {
        this.onSubmit();
        this.router.navigate(['/dashboard']);
      } else if (result.isValid == false) {
        this.firebaseErrorMessage = result.message;
      }
    }).catch((err) => {
      this.firebaseErrorMessage = err;
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.signupForm.value);
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
