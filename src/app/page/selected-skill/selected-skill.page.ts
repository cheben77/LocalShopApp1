import { Component } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { ModalPageComponent } from 'src/app/components/modal-page/modal-page.component';
@Component({
  selector: 'app-selected-skill',
  templateUrl: './selected-skill.page.html',
  styleUrls: ['./selected-skill.page.scss'],
})
export class SelectedSkillPage {
  router: any;
  public items: Array<{ title: string; note: string; icon?: string }> = [];
  public userSkills: Skill[];

  public oneSkill: Skill;
  private skillService: SkillService;

  // tslint:disable-next-line: max-line-length
  constructor(skillService: SkillService, public navCtrl: NavController, public modalController: ModalController, public toastController: ToastController) {
    this.skillService = skillService;
    this.oneSkill =
      this.skillService.currentSkill;
    // get the right content of one selected skill in the skill array
    this.userSkills =
      this.skillService.currentDevice.skills;
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }


  public goToSkills(selectedSkill: Skill) {
    this.skillService.currentSkill = selectedSkill;
    this.router.navigateByUrl('/tabs/selected-skill');
  }

  async presentToast(selected: boolean) {
    if (selected) {
      const toast = await this.toastController.create({
        message: 'Successfully added',
        duration: 2000,
      });
      toast.present();
    }
  }

  ionViewWillEnter() { // will adapt oneSkill's content everytime you click and change the selected skill
    this.oneSkill =
      this.skillService.currentSkill;
  }

  /**
   *
   *  Add or remove a skill from current certification
   *  @param {Skill} skill
   *  @memberof SkillExplorerPage
   */
  public updateSkill(skill: Skill) {
    if (skill.selected) {
      this.skillService.currentSkill.selected = true;
      this.skillService.addUserSkill(skill);
    } else {
      this.skillService.removeUserSkill(skill);
    }
    this.presentToast(skill.selected);
  }

}

