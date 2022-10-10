import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http: HttpClient) { }

  getFilteredDoctor(session: string, slot: string, date:string):Observable<Doctor[]> {
   return this.http.get<Doctor[]>("http://localhost:6432/doctor/get/"+session+"/"+slot+"/"+date);
  }

  getspeciality(session: string, slot: string, date: string):Observable<Doctor[]> {
    return this.http.get<Doctor[]>("http://localhost:6432/speciality/get/"+session+"/"+slot+"/"+date);
  }
  

}
