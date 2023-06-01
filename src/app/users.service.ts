import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public login = false
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  public loadUsers() {
    return this.httpClient.get<any>(this.apiUrl);
  }
  public getActiveUser(id : number){
    return this.httpClient.get(`${this.apiUrl}/${id}`)
  }

}
