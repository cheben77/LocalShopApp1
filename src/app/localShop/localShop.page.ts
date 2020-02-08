import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { url } from 'inspector';

@Component({
  selector: 'app-localSop',
  templateUrl: 'localShop.page.html',
  styleUrls: ['localShop.page.scss']
})
export class LocalShopPage {
  images = [

  ];


  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage
  ) {
    this.getImagesDatabase();
  }

  getImagesDatabase() {
    this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image);
      });
    });
  }

  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }
}
