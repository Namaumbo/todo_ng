import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  public login = false
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  public activeUser: any

  constructor(private httpClient: HttpClient) { }

  public loadUsers() {
    return this.httpClient.get<any>(this.apiUrl);
  }
  public getActiveUser(id: number) {
    return this.httpClient.get(`${this.apiUrl}/${id}`)
  }

  public setUser(user: any) {
    this.activeUser = user;
  }

  public getUser() {
    return this.activeUser;
  }

}
