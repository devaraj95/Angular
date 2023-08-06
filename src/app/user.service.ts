import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './model/city';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  private baseURL="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

    ngOnInit(): void {
      
   }
   getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/getAll');
    }
  createUser(user:User):Observable<Object>{
    return this.httpClient.post<User>('http://localhost:8080/saves',user)
  }

  getEmployeeById(id:Number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080/getUser/'+id)  
    //return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id:Number,user:User):Observable<Object>{
    return this.httpClient.put<User>('http://localhost:8080/update/'+id,user)
  }

    deleteEmployee(id:Number):Observable<User>{
    return this.httpClient.delete<User>('http://localhost:8080/delete/'+id)  
  }
  getAllCity():Observable<City[]>{
    return this.httpClient.get<City[]>('http://localhost:8080/getAllCity');
    }

}

