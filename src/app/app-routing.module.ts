import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddairportComponent } from './addairport/addairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AdminComponent } from './admin/admin.component';
import { CancelflightComponent } from './cancelflight/cancelflight.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component'
import { UpdateFlightComponent } from './update-flight/update-flight.component'
import { ModifyscheduleflightComponent } from './modifyscheduleflight/modifyscheduleflight.component';
import { SearchscheduleflightComponent } from './searchscheduleflight/searchscheduleflight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { AuthGuardService } from './auth-guard.service';
import { BookTicketByUserComponent } from './book-ticket-by-user/book-ticket-by-user.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { FlightListComponent } from './flight-list/flight-list.component';



import { Forgot1Component } from './forgot1/forgot1.component';

import { Forgot3Component } from './forgot3/forgot3.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { SearchFlightByUserComponent } from './search-flight-by-user/search-flight-by-user.component';
import { PassengerListComponent} from './passenger-list/passenger-list.component';


import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { PassengerEntryComponent } from './passenger-entry/passenger-entry.component';
import { BookTicket } from './model/ticketBooking.model';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { CancelTripComponent } from './cancel-trip/cancel-trip.component';


const routes: Routes = [
  {path:'',redirectTo:'menu',pathMatch:'full'},
  {path:'menu',component:MenuComponent},
  { path:'login',component:LoginComponent},
  {path:'admin/:id',component:AdminComponent},
  {path:'admin',component:AdminComponent},
  {path:'addflight',component:AddflightComponent,canActivate:[AuthGuardService]},
  {path:'addairport',component:AddairportComponent,canActivate:[AuthGuardService]},
  {path:'airportlist',component:AirportListComponent,canActivate:[AuthGuardService]},
  {path:'delete',component:CancelflightComponent,canActivate:[AuthGuardService]},
  {path:'deleteTrip',component:CancelTripComponent,canActivate:[AuthGuardService]},
  {path:'updateairport/:id',component:UpdateAirportComponent,canActivate:[AuthGuardService]},
  {path:'updateFlight/:pid',component:UpdateFlightComponent,canActivate:[AuthGuardService]},
  {path:'modify',component:ModifyscheduleflightComponent,canActivate:[AuthGuardService]},
  {path:'search',component:SearchscheduleflightComponent,canActivate:[AuthGuardService]},
  {path:'viewflights',component:ViewflightsComponent,canActivate:[AuthGuardService]},
 
  {path:'signup',component:SignupComponent},
 
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuardService]},
  {path:'username',component:Forgot1Component},
  
  {path:'ResetPassword/:username',component:Forgot3Component},

  {path:'bookticket/:id/:username',component:BookticketComponent,canActivate:[AuthGuardService]},
  {path:'flightlist/:username',component:FlightListComponent,canActivate:[AuthGuardService]},
  {path:'user/:id',component:UserComponent,canActivate:[AuthGuardService]},
  {path:'searchFlightByUser/:username',component:SearchFlightByUserComponent,canActivate:[AuthGuardService]},
  {path:'bookingConfirmed',component:BookingConfirmedComponent,canActivate:[AuthGuardService]},
  {path:'cancelTicket/:username',component:CancelticketComponent,canActivate:[AuthGuardService]},
  {path:'bookTicket/:username',component:BookTicketByUserComponent,canActivate:[AuthGuardService]},
  {path:'passengerEntry/:username/:sno/:flightId/:carrierName/:source/:destination/:date/:schedule_period/:noOfPassengers/:duration/:starting_time/:ending_time/:prize/:avaliable_seats/:sold_out/:ticketId',component:PassengerEntryComponent,canActivate:[AuthGuardService]},  
  {path:'user',component:UserComponent,canActivate:[AuthGuardService]},
  {path:'passengerList',component:PassengerListComponent,canActivate:[AuthGuardService]},
  {path:'userhome/:id',component:HomeloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
