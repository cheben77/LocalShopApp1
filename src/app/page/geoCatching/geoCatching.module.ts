import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeoCatchingPage } from './geoCatching.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GeoCatchingPage }])
  ],
  declarations: [GeoCatchingPage]
})
export class GeoCatchingPageModule {}
