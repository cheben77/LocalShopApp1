import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Badge } from '@ionic-native/badge/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId: string;
  mail: string;
  method: string;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    private badge: Badge,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public afSG: AngularFireStorage,
    private camera: Camera
  ) {{
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
      } else {
        console.log('connecté: ' + auth.uid);
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
       // this.badge.set();
       // this.badge.increase();
       // this.badge.clear();
      }
    }); }}
     uploadImage(Image: string, userId: string): any {
      // Implementation
    }

    // tslint:disable-next-line: no-unused-expression
     getImage(userId: string, Image: string): any {
      // Implementation
    }

    private generateUUID(): string {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
}
