import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ApplicationShellRoutingModule } from './application-shell-routing.module';
import { PublicContainerComponent } from './containers';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';



@NgModule({
  declarations: [PublicContainerComponent, NavigationListComponent],
  imports: [
    // Angular modules
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // Libs modules
    // App modules
    ApplicationShellRoutingModule
  ]
})
export class ApplicationShellModule { }
