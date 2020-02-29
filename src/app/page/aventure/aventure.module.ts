import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AventurePageRoutingModule } from './aventure-routing.module';

import { AventurePage } from './aventure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AventurePageRoutingModule
  ],
  declarations: [AventurePage]
})
export class AventurePageModule {}
