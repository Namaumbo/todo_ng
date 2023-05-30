import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private data : ToDoService){}

  public item: any = {
    title:  '',
    userId: 1,
    completed : false
  };
ngOnInit():void{}
  public addItem(item:string){
    console.log(item)
    // this.data.createItem( this.item).subscribe(()=>{
    //   console.log('item added successfully')
    // }
    
  }
}
