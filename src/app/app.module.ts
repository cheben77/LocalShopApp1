import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { Facebook } from '@ionic-native/facebook/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';







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
