import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'geo-aventure',
    loadChildren: () => import('./geo-aventure/geo-aventure.module').then( m => m.GeoAventurePageModule)
  },
  {
    path: 'partenaires',
    loadChildren: () => import('./partenaires/partenaires.module').then( m => m.PartenairesPageModule)
  },
  {
    path: 'aventure',
    loadChildren: () => import('./aventure/aventure.module').then( m => m.AventurePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
