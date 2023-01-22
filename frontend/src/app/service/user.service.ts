import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  acceptUser(data){
    return this.http.post(`${this.uri}/user/acceptUser`, data);
  }

  deleteUser(data){
    return this.http.post(`${this.uri}/user/deleteUser`, data);
  }

  rejectUser(data){
    return this.http.post(`${this.uri}/user/rejectUser`, data);
  }

  getUsernameById(data) {
    return this.http.post(`${this.uri}/user/getUsernameById`, data);
  }

  getUserById(data){
    return this.http.post(`${this.uri}/user/getUserById`, data);
  }

  login(data) {
    return this.http.post(`${this.uri}/user/login`, data);
  }

  register(data) {
    return this.http.post(`${this.uri}/user/register`, data);
  }
}
