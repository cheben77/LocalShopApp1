import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'geo-aventure',
    loadChildren: () => import('./page/geo-aventure/geo-aventure.module').then( m => m.GeoAventurePageModule)
  },
  {
    path: 'partenaires',
    loadChildren: () => import('./page/partenaires/partenaires.module').then( m => m.PartenairesPageModule)
  },
  {
    path: 'aventure',
    loadChildren: () => import('./page/aventure/aventure.module').then( m => m.AventurePageModule)
  },
  {
    path: 'quetes',
    loadChildren: () => import('./page/quetes/quetes.module').then( m => m.QuetesPageModule)
  },
  {
    path: 'partenaires-maps',
    loadChildren: () => import('./page/partenaires-maps/partenaires-maps.module').then( m => m.PartenairesMapsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
