import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url='/auth/signup';
private loginurl = '/auth/login';
private verification = '/auth/verify';
  constructor(private http: HttpClient,) { 
    console.log('ddddddddddddd');
  }
  generalsignup(details) {
    console.log('details',details);
    return this.http.post<any>(this.url,details);
  }
  generallogin(details) {
    console.log('details',details);
    return this.http.post<any>(this.loginurl,details);
  }
  generalverification(details) {
    return this.http.post<any>(this.verification,details);
  }

}
