import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// container/ smart/ presentational
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';

// dumb component
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-detail.component';

@NgModule({
  declarations: [
    // container/ smart component
    PassengerDashboardComponent,
    // dumb component
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [BrowserModule],
  exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {}
