import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersListComponent} from "./customer/customers-list/customers-list.component";
import {CustomerAddFormComponent} from "./customer/customer-add-form/customer-add-form.component";

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'add-customer', component: CustomerAddFormComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }, // Domyślna trasa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
