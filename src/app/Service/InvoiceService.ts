import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Customer } from "../Interface/CustomerInterface";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
import { Invoice } from "../Interface/InvoiceInterface";
@Injectable({
    providedIn: 'root'
})

export class InvoiceService{

    constructor( private http: HttpClient) {}

    generateInvoice = (transactionIds:any):Observable<Invoice[]> =>{
        return this.http.post<Invoice[]>(AppComponent.ApplicationUrl+"Invoice/GenerateInvoice",transactionIds);
    }

    getAllinvoice = () : Observable<Invoice[]> => {
        return this.http.get<Invoice[]>(AppComponent.ApplicationUrl+"Invoice/GetAllInvoice");
    }

}