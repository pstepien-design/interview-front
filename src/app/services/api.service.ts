import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    const url = 'http://localhost:3000/users';
    return this.http.get<User[]>(url);
  }

  public getUserById(id: number): Observable<User> {
    const url = `http://localhost:3000/users/${id.toString()}`;
    return this.http.get<User>(url);
  }
}
