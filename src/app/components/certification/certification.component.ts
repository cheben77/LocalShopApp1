import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/models/certification';
import { SkillService } from 'src/app/services/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent {

  // tslint:disable-next-line: no-input-rename
  @Input('value') public certificationDemand: Certification;

  public skillService: SkillService;
  public router: Router;

  constructor(skillService: SkillService) {
    this.skillService = skillService;
  }

  public goToSkills(selectedSkill: Skill) {
    this.skillService.currentSkill = selectedSkill;
    this.router.navigateByUrl('/tabs/selected-skill');
  }
}
