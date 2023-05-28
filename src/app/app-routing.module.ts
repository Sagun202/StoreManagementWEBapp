import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { ProductComponent } from './Components/product/product.component';
import { SalesTransactionComponent } from './Components/sales-transaction/sales-transaction.component';
import { AllInvoiceComponent } from './Components/all-invoice/all-invoice.component';

const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path:"customer",component:CustomerComponent},
  {path:"product",component:ProductComponent},
  {path:"transaction",component:SalesTransactionComponent},
  {path:"invoice",component:AllInvoiceComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
