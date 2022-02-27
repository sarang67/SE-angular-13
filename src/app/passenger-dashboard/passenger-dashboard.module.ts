import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// container/ smart/ presentational
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';

// dumb component
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    // container/ smart component
    PassengerDashboardComponent,
    // dumb component
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  exports: [PassengerDashboardComponent],
  //providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {
  
}
