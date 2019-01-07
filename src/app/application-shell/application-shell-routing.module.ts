import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: PublicContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationShellRoutingModule { }
