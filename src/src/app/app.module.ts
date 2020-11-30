import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { AirportListComponent} from './airport-list/airport-list.component'
import { SearchscheduleflightComponent } from './searchscheduleflight/searchscheduleflight.component';
import { ModifyscheduleflightComponent } from './modifyscheduleflight/modifyscheduleflight.component';
import { CancelflightComponent } from './cancelflight/cancelflight.component';
import { AddairportComponent } from './addairport/addairport.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component'

import { SignupComponent } from './signup/signup.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { Forgot1Component } from './forgot1/forgot1.component';

import { Forgot3Component } from './forgot3/forgot3.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { UserComponent } from './user/user.component';
import { SearchFlightByUserComponent } from './search-flight-by-user/search-flight-by-user.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { BookTicketByUserComponent } from './book-ticket-by-user/book-ticket-by-user.component';
import { PassengerEntryComponent } from './passenger-entry/passenger-entry.component';
import { CommonModule } from '@angular/common';
import { HomeloginComponent } from './homelogin/homelogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
    AddflightComponent,
    ViewflightsComponent,
    CancelflightComponent,
    AirportListComponent,
    AddairportComponent,
    UpdateAirportComponent,
    
    SearchscheduleflightComponent,
   
    ModifyscheduleflightComponent,
    AirportListComponent,
    
    SignupComponent,
    
    LogoutComponent,
    Forgot1Component,
    BookticketComponent,
    FlightListComponent,
    UserComponent,
    SearchFlightByUserComponent,
    CancelticketComponent,
    BookTicketByUserComponent,
    HomeloginComponent,
    
    Forgot3Component,
    
    PassengerEntryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
