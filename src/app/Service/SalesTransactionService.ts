import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { SalesTransaction } from "../Interface/SalesTransaction";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
@Injectable({
    providedIn: 'root'
})

export class SalesTransactionService{

    /**
     *
     */
    constructor( private http: HttpClient) {}

    addSalesTransaction = (salesTransaction:SalesTransaction):Observable<any> =>{
        return this.http.post<any>(AppComponent.ApplicationUrl+"SalesTransaction/CreateSaleTransaction",salesTransaction);
    }

    getAllSalesTransaction = ():Observable<SalesTransaction[]> =>{
        return this.http.get<SalesTransaction[]>(AppComponent.ApplicationUrl+"SalesTransaction/GetAllSalesTransactions");
    }

    deleteSalesTransaction = (id:number):Observable<boolean> =>{
        return this.http.delete<boolean>(AppComponent.ApplicationUrl+"SalesTransaction/DeleteSalesTransaction?id="+id);
    }

    UpdateSalesTransaction = (salesTransaction:SalesTransaction):Observable<boolean> =>{
        return this.http.post<boolean>(AppComponent.ApplicationUrl+"SalesTransaction/UpdateSalesTransaction",salesTransaction);
    }

}