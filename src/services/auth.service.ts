import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { query } from '@angular/animations';

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
  generalverification() {
    // console.log(id_va)
    // console.log('hello..............',id_variable);
    return this.http.get<any>(this.verification);
  }

}
