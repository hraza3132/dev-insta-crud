import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {CrudDevInsta} from './crud/crud-enum'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }
 

  getPeople(){
   
    return this.httpClient.get("https://dummyjson.com/users")
  }

  getSingleUser(id:number){
    return this.httpClient.get(`https://dummyjson.com/users/${id}`)
  }

  postUser(data:any){
    return this.httpClient.post('https://dummyjson.com/users/add',data)
  }

  updateUser(id:any, data:{}){
    return this.httpClient.put(`https://dummyjson.com/users/${id}`,  data)
  }
}
