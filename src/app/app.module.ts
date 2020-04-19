import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
<<<<<<< HEAD
=======
import { AngularFirestoreModule } from '@angular/fire/firestore';
>>>>>>> 35b3261f73643fbf0e87dad6d4679099b51911d4
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { Facebook } from '@ionic-native/facebook/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
=======
import { IonicModule } from '@ionic/angular';
>>>>>>> 35b3261f73643fbf0e87dad6d4679099b51911d4
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
<<<<<<< HEAD
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
<<<<<<< HEAD
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { RouteReuseStrategy } from '@angular/router';
=======
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
=======
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
>>>>>>> MarquetPlace





<<<<<<< HEAD
import { Facebook } from '@ionic-native/facebook/ngx';
=======
>>>>>>> MarquetPlace
>>>>>>> 35b3261f73643fbf0e87dad6d4679099b51911d4


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
<<<<<<< HEAD
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
=======
    //LocalNotifications
>>>>>>> MarquetPlace
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
