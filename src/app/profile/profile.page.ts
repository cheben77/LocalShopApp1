import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Badge } from '@ionic-native/badge/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  userId: string;
  mail: string;
  method: any;
  image: string;


  constructor(
    // badge: Badge,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private camera: Camera
  ) {
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
    });
  }

  // tslint:disable-next-line:semicolon
  async addPhoto(source: string) {
    if  (source === 'library') {
       console.log('library');
       const libraryImage = await this.openLibrary();
       this.image = 'data:image/jpg;base64,' + libraryImage;
    } else {
      console.log('camera');

    }
  }

async openLibrary() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  return await this.camera.getPicture(options);
}

  logout() {
    this.afAuth.auth.signOut();
  }
}
