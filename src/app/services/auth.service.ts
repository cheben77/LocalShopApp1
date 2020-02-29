import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserCredential } from '../models/user-credential';
import { Observable } from 'rxjs';




@Injectable()

export abstract class AuthService {
  public abstract user: User;
  public abstract getAuth(userCredential: UserCredential): Observable<UserCredential>;
  public abstract getProfile(): Observable<User>;
  public abstract setUser(user: User): any;
  public abstract saveUser(user: User);
  public abstract loadUser(key: string);
}
