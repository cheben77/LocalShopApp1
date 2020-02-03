import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodePage } from './qrCode.page';

@NgModule({
  imports: [
    QRCodeModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QrCodePage }])
  ],
  declarations: [QrCodePage]
})
export class QrCodePageModule {}
