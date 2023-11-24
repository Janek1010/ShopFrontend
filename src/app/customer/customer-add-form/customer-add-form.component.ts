import { Component } from '@angular/core';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersServiceService } from '../customers-list/customers-service.service';  // Zastąp to rzeczywistą ścieżką
@Component({
  selector: 'app-customer-add-form',
  templateUrl: './customer-add-form.component.html',
  styleUrl: './customer-add-form.component.css'
})
export class CustomerAddFormComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomersServiceService) {
    this.customerForm = this.fb.group({
      pesel: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }
  addCustomer() {
    if (this.customerForm.valid) {
      const newCustomer: Customer = {
        id: '',  // Automatycznie generowane w serwisie
        pesel: this.customerForm.value.pesel,
        name: this.customerForm.value.name,
        surname: this.customerForm.value.surname,
        age: this.customerForm.value.age,
      };

      this.customerService.addOrUpdateCustomer(newCustomer).subscribe(response => {
        console.log('Klient dodany pomyślnie', response);
      });
    }
  }
}
