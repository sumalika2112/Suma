import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAppointmentComponent } from './component/book-appointment/book-appointment.component';
import { SearchDoctorsComponent } from './component/search-doctors/search-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAppointmentComponent,
    SearchDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
