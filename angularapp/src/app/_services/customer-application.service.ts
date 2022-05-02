import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerApplication } from '../models/customer-application.model';

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CustomerApplicationService {
  redirectToUrl?:string;
  hasApplied!:boolean;

  constructor(private http:HttpClient) { }
  post(det:any):Observable<any>{
    return this.http.post<CustomerApplication>(url + "/addjob",det)
  }
  getall(det:any):Observable<any>{
    return this.http.get<CustomerApplication>(url + "/getAlljobs",det)
  }
  update(det:any,id:any):Observable<any>{
    return this.http.post<CustomerApplication>(url+`/updatejob/${id}`,det)
  }
  deleteJobById(id:any):Observable<void>{
    return this.http.delete<any>(url+"/deletejob/"+id)
  }
  
  getUserName(det:any):Observable<any>{
    return this.http.get<String>(url+"/getusername",det)
    }
  
  getAllById():Observable<any>{
    return this.http.get<CustomerApplication>(url +"/getAllById");
    }
}
