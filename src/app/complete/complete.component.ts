import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {

  allTodos : any

  constructor(public data : ToDoService , public user : UsersService){

  }

  ngOnInit(){
    let user  = this.user.getUser()

    this.data.getList(user.id).subscribe((data)=>{
      this.allTodos = data
    })


  }

}
