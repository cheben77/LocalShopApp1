import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Badge } from '@ionic-native/badge/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
// ========================================================//


// ========================================================//
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})

export class ProfilePage {
  [x: string]: any;
  userId: string;
  mail: string;
  method: any;
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  imagePath: string;
  upload: any;
  images = [];

// ========================================================//
  constructor(
    public afAuth: AngularFireAuth,
    badge: Badge,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private camera: Camera
  ) {
    this.getImagesDatabase();
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
      this.plt.ready().then(() =>{
          this.localNotification.on('click').subscribe(res =>{

          });
          this.localNotification.on('trigger').subscribe(res => {
          });
        });
    });
  }
//========================================================//
      getImagesDatabase() {
        this.afDB.list('images').snapshotChanges(['child_added']).subscribe(images => {
         console.log(images);
         images.forEach(image => {
           // tslint:disable-next-line:comment-format
            //console.log('Reference image: ' + image.payload.exportVal().name);
            this.getImagesStorage(image);
    });
  });
}
//========================================================//


//========================================================//    
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
//========================================================//

//========================================================//
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

// ================Function UpLoad_FireBase========================================//
  async uploadFirebase() {
// ==================Mise en place de l'image dans le Profile User FireBase==================================//
    const loading = await this.loadingController.create();
    await loading.present();
    this.imagePath = 'Images/User/img/' + new Date().getTime() + '.jpg';
    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
// ==========================================================//
// ===============Alert par message==========================================//
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
// ========================================================//

// ========================================================//
  }
}
