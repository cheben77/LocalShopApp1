import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseService } from './services/firebase.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { QRCodeModule } from 'angularx-qrcode';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

<<<<<<< HEAD


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Facebook } from '@ionic-native/facebook/ngx';


=======
>>>>>>> b5302a84f66ce77e570becc624080fb28e97adf6
export const firebaseConfig = {
    apiKey: 'AIzaSyCcyuFkXAqca0vcsLIQRG2UociZGr2oUrA',
    authDomain: 'geoapp-a10da.firebaseapp.com',
    databaseURL: 'https://geoapp-a10da.firebaseio.com',
    projectId: 'geoapp-a10da',
    storageBucket: 'geoapp-a10da.appspot.com',
    messagingSenderId: '279119677501',
    appId: '1:279119677501:web:91d699c056a5869f92c254',
    measurementId: 'G-SRN9Q6HXGX'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    QRCodeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  providers: [
    FirebaseService,
    Facebook,
    StatusBar,
    SplashScreen,
    QRScanner,
    Camera,
    InAppBrowser,
    //LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
