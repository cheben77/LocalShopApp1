import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent {

  constructor(public modalController: ModalController) {

  }

  public dismiss() {
    this.modalController.dismiss();
  }
}
