import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// container/ smart/ presentational
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';

// dumb component
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    // container/ smart component
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // dumb component
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  //providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
