import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../../service/customers-service.service';
import { Customer } from '../../model/customer.model';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent  implements OnInit {
  customerId!: string;
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomersServiceService
  ) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.customerId).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }
}
