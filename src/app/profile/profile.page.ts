import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  userId: string;
  mail: string;
  method: any;
  badge: any;
  //private badge: Badge;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
      } else {
        console.log('connecté: ' + auth.uid);
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
        this.badge.set();
        this.badge.increase();
        this.badge.clear();
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
