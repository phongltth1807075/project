import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inside/inside.module').then(m => m.InsideModule),
  },
  {
    path:'authentication',
    loadChildren: () => import('./outside/outside.module').then(m => m.OutsideModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: !Boolean(history.pushState)})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
