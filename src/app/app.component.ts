import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    public camera: Camera
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // tslint:disable-next-line:no-shadowed-variable
      this.afAuth.authState.subscribe(auth => {
      if (!auth) {
          console.log('non connecté');
          this.router.navigateByUrl('tabs/login');
        } else {
          this.router.navigateByUrl('/');
          console.log('Connecté: ' + auth.uid);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
