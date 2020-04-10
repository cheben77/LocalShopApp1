import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoAventurePage } from './geo-aventure.page';

const routes: Routes = [
  {
    path: '',
    component: GeoAventurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoAventurePageRoutingModule {}
