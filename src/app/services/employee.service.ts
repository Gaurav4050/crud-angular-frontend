import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://crud-angular-backend.onrender.com/tasks', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://crud-angular-backend.onrender.com/tasks/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://crud-angular-backend.onrender.com/tasks');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://crud-angular-backend.onrender.com/tasks/${id}`);
  }
}
