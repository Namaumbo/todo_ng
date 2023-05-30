import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { items } from './interfaces/itemInterface'
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  // public sharedData: any;

  public _data: any

  constructor(private httpRequest: HttpClient) { }

  // getters and setters

  public getData() {
    return this._data
  }
  public setData(sharedData: any) {
    this._data = sharedData
  }
  // method of sharing between components
  public userList(data: any) {
    return data;
  }

  public getList(id: number) {
    return this.httpRequest.get<any>(`${this.apiUrl}/?userId=${id}`);
  }

  public deleteTask(itemId: number) {
    return this.httpRequest.delete(`${this.apiUrl}/${itemId}`)
  }
  public completeItem(todo: any) {
    return this.httpRequest.put(`${this.apiUrl}/${todo.id}`, todo)
  }

public addItem(toDo : items ){
  // let params = HttpRequest.p

  return this.httpRequest.post(`${this.apiUrl}`,toDo)

}

}
