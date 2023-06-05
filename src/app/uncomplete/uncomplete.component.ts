import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-uncomplete',
  templateUrl: './uncomplete.component.html',
  styleUrls: ['./uncomplete.component.css']
})
export class UncompleteComponent {


allToDoItems : any[] = []
constructor(public data: ToDoService,public user : UsersService ){}


ngOnInit(){


  let user = this.user.getUser()
  
this.data.getList(user.id).subscribe((data)=>{
  this.allToDoItems = data
})
}
}
