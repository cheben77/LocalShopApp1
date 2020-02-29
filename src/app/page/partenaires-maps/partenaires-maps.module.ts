import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartenairesMapsPageRoutingModule } from './partenaires-maps-routing.module';

import { PartenairesMapsPage } from './partenaires-maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartenairesMapsPageRoutingModule
  ],
  declarations: [PartenairesMapsPage]
})
export class PartenairesMapsPageModule {}
