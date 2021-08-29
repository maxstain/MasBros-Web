import { AuthService } from './../../services/auth.service';
import { UserService } from './../../Users/user.service';
import { User } from './../../Users/user';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() user!: User;
  users: any;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.userService.getUserList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(users => {
      this.users = users
    });
  }

  deleteUsers() {
    this.userService.deleteAll().catch(err => console.log(err));
  }

  updateUser(user: User) {

    this.userService.updateUser(this.user.key, user)
      .catch(err => console.log(err));
  }

  deleteUser() {
    this.userService.deleteUser(this.user.key).catch(
      err => console.log(err)
    );
  }

}
