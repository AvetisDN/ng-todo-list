import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  // todoListService: TodoListService

  todoList

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList()
  }
  

  addTodoItem(title: string) {
    //this.todoList.push({ title })
    this.todoListService.addItem({title})
  }
  removeTodoItem(item) {
    this.todoListService.deleteItem(item)
  }
  updateTodoItem(item, changedItem) {
    
    this.todoListService.updateItem(item, changedItem)
  }
}
