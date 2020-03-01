import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SkillService } from 'src/app/services/skill.service';
import { Observable } from 'rxjs';
import { University } from 'src/app/models/university';


@Component({
  selector: 'app-univ-modal',
  templateUrl: './univ-modal.component.html',
  styleUrls: ['./univ-modal.component.scss'],
})
export class UnivModalComponent {
  public items: Array<{ title: string; note: string }> = [];
  public value: any;
  public referential: Observable<University[]>;

  private skillService: SkillService;

  constructor(public modalController: ModalController, skillService: SkillService) {
    this.skillService = skillService;
    this.referential = this.skillService.getReferential();

  }

  public dismiss(item) {
    this.modalController.dismiss();
    if (item !== undefined) {
      localStorage.setItem('item', JSON.stringify(item));
    }

  }

}
