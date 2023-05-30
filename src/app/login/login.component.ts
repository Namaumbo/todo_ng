import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  username: string = ''
  public userList$: any[] = [];
  public dataList$: any[] = [];
  public content: any[] = []
  public incoming: any[] = []
  constructor(public data: UsersService, public todo: ToDoService, public router: Router) { }

  ngOnInit() {
    this.data.loadUsers().subscribe(data => {
      this.userList$ = data
    })
  }
  public handleLogin() {
    const foundUser = this.userList$.find(user => user.username === this.username)
    if (foundUser) {
      this.getUserTodo(foundUser)
    }
    else {
      const message = document.getElementById('error-message')
    

    }
  }
  public getUserTodo(user :any){
    this.todo.getList(user.id).subscribe((res:any)=>{
      this.todo.setData(res)
      })
      this.router.navigate([`/list/${user.id}`])
  }
}
