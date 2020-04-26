import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', loadChildren: './page/tabs/tabs.module#TabsPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./page/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'geoCatching',
    loadChildren: () => import('./page/geoCatching/geoCatching.module').then( m => m.GeoCatchingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'geo-aventure',
    loadChildren: () => import('./page/localShop/geo-aventure/geo-aventure.module').then( m => m.GeoAventurePageModule)
  },
  {
    path: 'partenaires',
    loadChildren: () => import('./page/localShop/partenaires/partenaires.module').then( m => m.PartenairesPageModule)
  },
  {
    path: 'aventure',
    loadChildren: () => import('./page/geoCatching/aventure/aventure.module').then( m => m.AventurePageModule)
  },
  {
    path: 'quetes',
    loadChildren: () => import('./page/geoCatching/quetes/quetes.module').then( m => m.QuetesPageModule)
  },
  {
    path: 'partenaires-maps',
    loadChildren: () => import('./page/geoCatching/partenaires-maps/partenaires-maps.module').then( m => m.PartenairesMapsPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./page/localShop/infos/infos.module').then( m => m.InfosPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
