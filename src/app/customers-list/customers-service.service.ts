import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {
  private readonly apiUrl = 'http://localhost:8080/api/customers';
  private readonly apiByIdUrl = 'http://localhost:8080/api/customers/{id}';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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
