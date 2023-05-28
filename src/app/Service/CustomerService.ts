import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Customer } from "../Interface/CustomerInterface";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
@Injectable({
    providedIn: 'root'
})

export class CustomerService{

    /**
     *
     */
    constructor( private http: HttpClient) {}

    addCustomer = (customer:Customer):Observable<any> =>{
        return this.http.post<any>(AppComponent.ApplicationUrl+"Customer/CreateCustomer",customer);
    }

    getAllCustomer = ():Observable<Customer[]> =>{
        return this.http.get<Customer[]>(AppComponent.ApplicationUrl+"Customer/GetAllCustomers");
    }

    deleteCustomer = (id:number):Observable<boolean> =>{
        return this.http.delete<boolean>(AppComponent.ApplicationUrl+"Customer/DeleteCustomer?id="+id);
    }

    UpdateCustomer = (customer:Customer):Observable<boolean> =>{
        return this.http.post<boolean>(AppComponent.ApplicationUrl+"Customer/UpdateCustomer",customer);
    }

}