import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CustomerComponent } from './Components/customer/customer.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from './Service/CustomerService';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './Components/product/product.component';
import { SalesTransactionComponent } from './Components/sales-transaction/sales-transaction.component';
import { InvoiceService } from './Service/InvoiceService';
import { ProductService } from './Service/ProductService';
import { SalesTransactionService } from './Service/SalesTransactionService';
import {MatDialogModule} from '@angular/material/dialog';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { AllInvoiceComponent } from './Components/all-invoice/all-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CustomerComponent,
    ProductComponent,
    SalesTransactionComponent,
    InvoiceComponent,
    AllInvoiceComponent
  ],
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [CustomerService, InvoiceService, ProductService,SalesTransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
