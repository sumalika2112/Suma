import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './component/book-appointment/book-appointment.component';
import { SearchDoctorsComponent } from './component/search-doctors/search-doctors.component';

const routes: Routes = [
  {path : '', component: BookAppointmentComponent},
  {path : 'search-doctors', component: SearchDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
