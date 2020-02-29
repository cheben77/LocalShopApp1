import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'localShop',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../page/localShop/localShop.module').then(m => m.LocalShopPageModule)
          }
        ]
      },
      {
        path: 'qrCode',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qrCode/qrCode.module').then(m => m.QrCodePageModule)
          }
        ]
      },
      {
        path: 'geoCatching',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../page/geoCatching/geoCatching.module').then(m => m.GeoCatchingPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../auth/login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'geo-aventure',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../page/geo-aventure/geo-aventure.module').then(m => m.GeoAventurePageModule)
      }
    ]
  },
  {
  path: 'partenaires',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../page/partenaires/partenaires.module').then(m => m.PartenairesPageModule)
    }
  ]
},
  {
    path: '',
    redirectTo: '/tabs/localShop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
