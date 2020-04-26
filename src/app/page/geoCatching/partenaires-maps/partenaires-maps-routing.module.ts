import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartenairesMapsPage } from './partenaires-maps.page';

const routes: Routes = [
  {
    path: '',
    component: PartenairesMapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartenairesMapsPageRoutingModule {}
