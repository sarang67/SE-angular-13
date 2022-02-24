import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// custom module
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PassengerDashboardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
// component imnformation
  declarations: [AppComponent],

// other modules information  
  imports: [BrowserModule],
*/
