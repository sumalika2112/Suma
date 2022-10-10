import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  doctorArr:Doctor[];
  specialityArr:Doctor[];
  searchlist:Doctor[];

  constructor(private doctorService:DoctorServiceService) { }

  ngOnInit(): void {
  }

  filterDoctors(doctorform: NgForm){
    this.doctorService.getFilteredDoctor(doctorform.value.session,doctorform.value.slot,doctorform.value.appointmentDate).subscribe(data=>{
      this.doctorArr = data;
    });
    console.log(this.doctorArr); 
    this.doctorService.getspeciality(doctorform.value.session,doctorform.value.slot,doctorform.value.appointmentDate).subscribe(data=>{
      this.specialityArr = data;
    });
  }

  searchform(doctorlistform: NgForm){
    this.searchlist=this.doctorArr.filter(d=>d.consultants == doctorlistform.value.consultants);
    console.log(this.searchlist);
  }

  toggle = true;
  status = 'Free'; 
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Free' : 'Booked';
}
}

