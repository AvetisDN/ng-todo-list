import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {

  constructor() { }

  todoTitle: string = ""

  isError: boolean = true

  ngOnInit(): void {}

  changeTodoTitle(newTitle: string) {
    this.todoTitle = newTitle
    if(newTitle) {
      this.isError = false
    } else {
      this.isError = true
    }
  }

  submitTodoItem(newTitle: string) {
    if(newTitle) {
      this.todoTitle = ''
      this.submit.emit(newTitle)
      this.isError = false
    } else {
      this.isError = true
    }
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

}
