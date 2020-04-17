import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Badge } from '@ionic-native/badge/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

// tslint:disable-next-line:component-class-suffix
// export class RefresherExample {
  // constructor() {}
// 
  // doRefresh(event) {
    // console.log('Begin async operation');
// 
    // setTimeout(() => {
      // console.log('Async operation has ended');
      // event.target.complete();
    // }, 2000);
  // }
// }
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  userId: string;
  email: string;
  method: any;
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  imagePath: string;
  upload: any;
  images = [];
  badge: any;


  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    // badge: Badge,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public afSG: AngularFireStorage,
    private camera: Camera
  ) {
    this.getImagesDatabase();
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connectéPageProfile');
      } else {
         console.log('connecté: ' + auth.uid);
         this.userId = auth.uid;
         this.email = auth.email;
         this.method = auth.providerData[0].providerId;
        //  this.badge.set();
        //  this.badge.increase();
        //  this.badge.clear();
      }
    });
  }
// ========================================================//
    getImagesDatabase() {
        this.afDB.list('images').snapshotChanges(['child_added']).subscribe(images => {
         console.log(images);
         images.forEach(image => {
           // tslint:disable-next-line:comment-format
            // console.log('Reference image: ' + image.payload.exportVal().name);
            this.getImagesStorage(image);
    });
  });
}
// ========================================================//


// ========================================================//    
    getImagesStorage(image: any) {
      const imgRef = image.payload.exportVal().ref;
      // pour récupérer l'URL des images
      this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
          console.log(imgUrl);
          this.images.push({
            name: image.payload.exportVal().name,
            url: imgUrl
          });
        });
    }
// ========================================================//

// ========================================================//
  // tslint:disable-next-line:semicolon
  async addPhoto(source: string) {
    if  (source === 'library') {
       console.log('library');
       const libraryImage = await this.openLibrary();
       this.image = 'data:image/jpg;base64,' + libraryImage;
    } else {
      console.log('camera');
      const cameraImage = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraImage;

    }
  }
// ========================================================//

// ========================================================//
  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }
// ========================================================//


// ========================================================//
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
// ========================================================//


// ========================================================//
  logout() {
    this.afAuth.auth.signOut();
  }
// ========================================================//


// ========================================================//
  async uploadFirebase() {
    const loading = await this.loadingController.create();
    await loading.present();
    // tslint:disable-next-line:no-unused-expression
    this.imagePath = 'user/image';
    // tslint:disable-next-line:no-unused-expression
    new Date().getTime() + '.jpg';


    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    this.upload.then(async () => { 
      this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Bravo',
        message: 'Votre photo est bien enregistrer.',
        buttons: ['OK']
      });
      await alert.present();
  });
  }
// ========================================================//
}
