import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
  selector: 'app-qrCode',
  templateUrl: 'qrCode.page.html',
  styleUrls: ['qrCode.page.scss'],
})


export class QrCodePage {
public textToCode: string;
public myAngularQrCode: string = null;
public showCamera = false;
public textScanned = '';

  constructor(
    private iab: InAppBrowser,
    private qrScanner: QRScanner,
    public alertController: AlertController
    ) {
      this.scanCode();
    }

  createQRCode() {
  this.myAngularQrCode = this.textToCode;
  this.textToCode = '';
}

scanCode() {
  this.showCamera = true;
  // Optionally request the permission early
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
    if (status.authorized) {
      // start scanning
      console.log('Scan en cours...' + JSON.stringify(status));
      const scanSub = this.qrScanner.scan().subscribe
                                              ((text: any) => {
                                                console.log('Scanned something', text.result);
                                                this.textScanned = text.result;
                                                this.qrScanner.hide(); // hide camera preview
                                                scanSub.unsubscribe(); // stop scanning
                                                this.showCamera = false;
      });
    } else if (status.denied) {
      // camera permission was permanently denied
    } else {
      // permission was denied, but not permanently. You can ask for permission again at a later time.
    }
  })
  .catch((e: any) => console.log('Error is', e));
}

closeCamera() {
  this.showCamera = false;
  this.qrScanner.hide(); // hide camera preview
  this.qrScanner.destroy();
}

openLink(link: any) {
  const browser = this.iab.create(link, '_system', 'location=yes');
}
}
