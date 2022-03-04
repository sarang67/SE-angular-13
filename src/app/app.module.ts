import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

// custom module
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NotFoundComponent } from './not-found.component';

// http://localhost:4200/
const route: Route[] = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'passenger', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PassengerDashboardModule,
    RouterModule.forRoot(route),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
// component imnformation
  declarations: [AppComponent],

// other modules information  
  imports: [BrowserModule],
*/
