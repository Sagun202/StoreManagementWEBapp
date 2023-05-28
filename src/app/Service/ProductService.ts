import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../Interface/ProductInterface";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
@Injectable({
    providedIn: 'root'
})

export class ProductService{

    /**
     *
     */
    constructor( private http: HttpClient) {}

    addProduct = (product:Product):Observable<any> =>{
        return this.http.post<any>(AppComponent.ApplicationUrl+"Product/CreateProduct",product);
    }

    getAllProduct = ():Observable<Product[]> =>{
        return this.http.get<Product[]>(AppComponent.ApplicationUrl+"Product/GetAllProducts");
    }

    deleteProduct = (id:number):Observable<boolean> =>{
        return this.http.delete<boolean>(AppComponent.ApplicationUrl+"Product/DeleteProduct?id="+id);
    }

    UpdateProduct = (product:Product):Observable<boolean> =>{
        return this.http.post<boolean>(AppComponent.ApplicationUrl+"Product/UpdateProduct",product);
    }

}