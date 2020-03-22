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
              import('../localShop/localShop.module').then(m => m.LocalShopPageModule)
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
              import('../geoCatching/geoCatching.module').then(m => m.GeoCatchingPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../auth/login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/localShop',
        pathMatch: 'full'
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
