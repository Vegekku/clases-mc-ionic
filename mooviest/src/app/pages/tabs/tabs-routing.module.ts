import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movie-tab',
        children: [
          {
            path: '',
            loadChildren: '../movie-tab/movie-tab.module#MovieTabPageModule'
          }
        ]
      },
      {
        path: 'about-tab',
        children: [
          {
            path: '',
            loadChildren: '../about-tab/about-tab.module#AboutTabPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movie-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
