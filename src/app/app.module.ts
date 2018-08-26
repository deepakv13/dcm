import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DcmHeaderMenuComponent } from './dcm-header-menu/dcm-header-menu.component';
import { DcmFooterMenuComponent } from './dcm-footer-menu/dcm-footer-menu.component';
import { DcmHomeComponent } from './dcm-home/dcm-home.component';
import { DcmRepositoryComponent } from './dcm-repository/dcm-repository.component';
import { DcmConsoleComponent } from './dcm-console/dcm-console.component';
import { ControlSummaryCardComponent } from './control-summary-card/control-summary-card.component';
import { ControlSummaryCardListComponent } from './control-summary-card-list/control-summary-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DcmHeaderMenuComponent,
    DcmFooterMenuComponent,
    DcmHomeComponent,
    DcmRepositoryComponent,
    DcmConsoleComponent,
    ControlSummaryCardComponent,
    ControlSummaryCardListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DcmHomeComponent },
      { path: 'repository', component: DcmRepositoryComponent },
      { path: 'console', component: DcmConsoleComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
