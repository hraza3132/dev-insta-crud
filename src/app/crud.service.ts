import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl = environment.apiUrl;

  getPeople(){
   let url = this.baseUrl + 'users'
    return this.httpClient.get(url)
  }

  getSingleUser(id:number){
    let url = this.baseUrl + `users/${id}`
    return this.httpClient.get(url)
  }

  postUser(data:any){
    let url = this.baseUrl + "users/add"
    return this.httpClient.post(url,data)
  }

  updateUser(id:any, data:{}){
    let url = this.baseUrl + `users/${id}`
    return this.httpClient.put(url,  data)
  }
}
