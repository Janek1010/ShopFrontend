import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import { Customer} from "./customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {
  private readonly apiUrl = '/api/customers';
  private readonly apiByIdUrl = '/api/customers/{id}';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addOrUpdateCustomer(customer: Customer): Observable<any> {
      customer.id = uuidv4();
      return this.http.put<any>(`${this.apiUrl}/${customer.id}`, customer);
  }
  deleteCustomer(id: string): Observable<any> {
    const url = this.apiByIdUrl.replace('{id}', id);

    // Utwórz obiekt HttpHeaders
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Przekaż obiekt HttpHeaders jako parametr do metody delete
    return this.http.delete(url, { headers });
  }
}
