import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customersService: CustomersServiceService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customersService.getCustomers().subscribe((data: any) => {
      this.customers = data;
      console.log('Otrzymane dane:', this.customers);
    });
  }
}
