import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectedSkillPage } from './selected-skill.page';
import { ModalPageComponent } from 'src/app/components/modal-page/modal-page.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedSkillPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SelectedSkillPage, ModalPageComponent],
  entryComponents: [ModalPageComponent],
})
export class SelectedSkillPageModule { }
