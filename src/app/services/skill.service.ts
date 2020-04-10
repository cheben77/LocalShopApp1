import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../models/university';
import { Skill } from '../models/skill';
import { Device } from '../models/device';
import { Certification } from '../models/certification';
import { Badge } from '../models/badge';
import { Files } from '../models/files';

@Injectable()

export abstract class SkillService {
  public abstract currentUniversity: University; // get the current univ in order to bind the result when clicked
  public abstract currentDevice: Device; // get the current device to select the right skills
  public abstract currentSkill: Skill; // the current skill
  public abstract currentCertification: Certification;
  public abstract certifications: Certification[];
  badge: Badge;

  public abstract getReferential(): Observable<University[]>;

  // public abstract getUserDevice(): Observable<Device[]>;

  public abstract getUserSkills(): Observable<Skill[]>;

  public abstract removeUserSkill(skill: Skill);

  public abstract addUserSkill(skill: Skill);

  public abstract submitCertification();

  public abstract validatedCertification(certification: Certification);

  public abstract removeUserFiles(file: Files);

  public abstract addUserFiles(file: Files);

  public abstract getBadges();
}
