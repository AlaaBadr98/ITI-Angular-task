import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }

  api = "http://localhost:3000/users";

  getdata(){
    return this.http.get(this.api)
  }


}