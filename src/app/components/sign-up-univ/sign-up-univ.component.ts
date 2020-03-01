import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SkillService } from 'src/app/services/skill.service';
import { Observable } from 'rxjs';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-sign-up-univ',
  templateUrl: './sign-up-univ.component.html',
  styleUrls: ['./sign-up-univ.component.scss'],
})
export class SignUpUnivComponent {

  public items: Array<{ title: string; note: string }> = [];
  public referential: Observable<University[]>;

  private skillService: SkillService;

  constructor(public modalController: ModalController, skillService: SkillService) {
    this.skillService = skillService;
    this.referential = this.skillService.getReferential();

  }

  public dismiss(item) {
    this.modalController.dismiss();
    if (item !== undefined) {
      // console.log(item);
      localStorage.setItem('item', JSON.stringify(item));
    }

  }


}
