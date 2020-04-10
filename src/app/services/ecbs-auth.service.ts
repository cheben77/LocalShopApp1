import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredential } from '../models/user-credential';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EcbsAuthService implements AuthService {

  public user: User;
  public removeUser(key: string) {
    throw new Error('Method not implemented.');
  }
  public getAuth(userCredential: UserCredential): Observable<UserCredential> {
    throw new Error('Method not implemented.');
  }
  public getProfile(): Observable<User> {
    throw new Error('Method not implemented.');
  }
  public setUser(user: User) {
    throw new Error('Method not implemented.');
  }
  public saveUser(user: User) {
    throw new Error('Method not implemented.');
  }
  public loadUser(key: string) {
    throw new Error('Method not implemented.');
  }


}
