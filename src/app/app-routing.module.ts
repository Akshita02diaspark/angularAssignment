import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreContainer } from './core/containers/core/core.container';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CoreContainer },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
