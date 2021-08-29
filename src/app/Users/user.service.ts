import { User } from './user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';

  usersRef!: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }

  createUser(user: User): void {
    this.usersRef.push(user);
  }

  updateUser(key: string, value: any): Promise<void> {
    return this.usersRef.update(key, value);
  }

  deleteUser(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  getUserList(): AngularFireList<User> {
    return this.usersRef;
  }

  deleteAll(): Promise<void> {
    return this.usersRef.remove();
  }
}
