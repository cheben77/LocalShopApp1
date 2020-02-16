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

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    QRCodeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    // Facebook,
    StatusBar,
    SplashScreen,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    InAppBrowser,
   // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
