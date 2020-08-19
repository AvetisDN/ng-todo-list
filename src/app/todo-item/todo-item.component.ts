import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter()
  @Output() update: EventEmitter<any> = new EventEmitter()

  removeItem() {
    this.remove.emit(this.item)
  }

  toggleCompleted() {
    this.update.emit({
      item: this.item,
      changedItem: {completed: !this.item.completed}
    })
  }

}
