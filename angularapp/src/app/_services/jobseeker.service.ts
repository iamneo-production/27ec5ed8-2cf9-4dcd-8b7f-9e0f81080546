import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobseeker } from '../models/jobseeker.model';


const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  redirectToUrl?:string;
  hasApplied!:boolean;

  constructor(private http:HttpClient) { }

  post(det:any):Observable<any>{
    return this.http.post<Jobseeker>(url + "/addjobseeker",det);
  }
  update(det:any,id:any):Observable<any>{
    return this.http.post<Jobseeker>(url+`/updatejobseeker/${id}`,det)
  }
  // this is the method
  get():Observable<any>{
    return this.http.get<Jobseeker>(url+"/AppliedJobs");
  }

  getApplication(id:any):Observable<any>{
    return this.http.get<Jobseeker>(url+`/viewapplications/${id}`)
  }
  deleteJobseekerById(id:any):Observable<void>{
    return this.http.delete<any>(url+"/deletejobseeker/"+id)
  }

  getAll(det:any):Observable<any>{
    return this.http.get<Jobseeker>(url+"/getAllJobSeekers",det);
  }
}
