import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  ILatLng,
  Circle
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { fromEvent, Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-geoCatching',
  templateUrl: 'geoCatching.page.html',
  styleUrls: ['geoCatching.page.scss']
})


export class GeoCatchingPage {
  map: GoogleMap;
  private geolocation: Geolocation;
  myPosition: Observable<Geoposition>;
  afAuth: any;

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    public platform: Platform,
    public api: FirebaseService
  ) {
    if (this.platform.is('cordova')) {
      // this.geolocation.getCurrentPosition().then((resp) => {
      //  // resp.coords.latitude
      //  // resp.coords.longitude
      // }).catch((error) => {
      //   console.log('Error getting location', error);
      // });

      // tslint:disable-next-line:new-parens
      this.geolocation = new Geolocation;
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log(this.platform, 'plop');
    if (this.platform.is('cordova')) {

      this.myPosition = this.geolocation.watchPosition();

      this.myPosition.subscribe(data => {
        this.loadMap(data.coords);
        this.map.addMarker({
          icon: 'black',
          animation: 'BOUNCE',
          position: { lat: data.coords.latitude, lng: data.coords.longitude },
        });
        this.api.getQRCodePosition().subscribe(list => list.forEach(QRCode => {
          const QRCodePosition = { lat: QRCode.data().lat, lng: QRCode.data().lng };
          this.map.addMarker({
            icon: 'red',
            animation: 'DROP',
            position: QRCodePosition
          });

        }));
      });
    }
  }
//===================================================//
  loadMap(coords) {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBJX-gnG_U4pJqWY24Ed0-G5wa7msWQuFw',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBJX-gnG_U4pJqWY24Ed0-G5wa7msWQuFw'
    });
    const GOOGLE: ILatLng = {lat : 37.422858, lng : -122.085065};
    this.map = GoogleMaps.create('map_canvas', {
            camera: {
              target: {
                lat: coords.latitude,
                lng: coords.longitude
              },
              zoom: 12,
              tilt: 30
            }
          });
   
  
    // Fit the map camera to circle
    // this.map.moveCamera({
    //   target: circle.getBounds()
    
    // });
  }
  //===================================================//

  //===================================================//
  setMapTypeId() {
    this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
  }
 //===================================================//

  // async mapOptions() {
  //   const actionSheet = await this.actionCtrl.create({
  //     buttons: [{
  //       text: 'Aventures',
  //       handler: () => {
  //         console.log('Mode Aventure');
  //         this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
  //       }
  //     }, {
  //       text: 'Partenaires',
  //       handler: () => {
  //         console.log('LocalShop');
  //         this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
  //       }
  //     }, {
  //       text: 'Quetes',
  //       handler: () => {
  //         console.log('Mode Conquête');
  //         this.map.setMapTypeId(GoogleMapsMapTypeId.TERRAIN);
  //       }
  //     }, {
  //       text: 'Annuler',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Annuler');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

//===================================================//
placeMarker(markerTitle: string) {
    const marker: Marker = this.map.addMarkerSync({
       title: markerTitle,
       icon: 'green',
       animation: 'DROP',
       position: this.map.getCameraPosition().target
    });
  }
//===================================================//

//===================================================//
  async addMarker() {
    const alert = await this.alertController.create({
      header: 'Ajouter un emplacement',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Le titre'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ajouter',
          handler: data => {
            console.log('Titre: ' + data.title);
            this.placeMarker(data.title);
          }
        }
      ]
    });
    await alert.present();
  }
  logout() {
    this.afAuth.auth.signOut();
    console.log('déconnecter !!');
  }
}
