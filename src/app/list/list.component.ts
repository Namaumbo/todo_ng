import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { items } from '../interfaces/itemInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public todoList$: any[] = [];
  public todo: string = ''
  public itemInterface: items = { title: '', completed: false, userId: 0 };
  public id: any = ''
  public response: any
  intId: number = 0
  totalNumber: any;


  //  injection
  constructor(private data: ToDoService, public params: ActivatedRoute) { }

  public handleAddTodo() {
    let has_added: boolean = false
    this.id = this.params.snapshot.paramMap.get('id');
    this.intId = parseInt(this.id)
    this.itemInterface.title = this.todo;
    this.itemInterface.completed;
    this.itemInterface.userId = this.intId

    if (this.todo.length == 0) {
      alert('field is empty')
    } else {
      this.response = this.data.addItem(this.itemInterface).subscribe(() => {
        has_added = true;

        if (has_added) {
          alert('item added')
          this.todoList$.unshift(this.itemInterface)
          this.totalNumber = this.todoList$.length
        }
      })
    }


  }
  // handle complete item
  public handleComplete(todo: any) {

    this.data.completeItem(todo).subscribe(() => {
      todo.completed = true;
      // const todoElement = document.getElementsByClassName('titles');
    })

  }

  // handle delete item
  public handleDelete(id: number) {
    this.data.deleteTask(id)
      .subscribe(() => {

        // Remove the deleted item from the local todos array
        this.todoList$ = this.todoList$.filter((todo: any) => todo.id !== id);
        if (this.todoList$)  alert('item successfully deleted')
        this.totalNumber = this.todoList$.length
      })
     
  }
  ngOnInit() {
    setTimeout(() => {
      this.loadTodolist()
    }, 1000)

  }
  public loadTodolist() {
    this.todoList$ = this.data.getData()
    this.totalNumber = this.todoList$.length
  }


}

