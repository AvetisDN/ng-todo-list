import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'todo_list'

const defaultList = [
  {title: 'Install NodeJS/NPM'},
  {title: 'Install Angular CLI'},
  {title: 'Create a New App'},
  {title: 'Serve your App'},
  {title: 'Code'},
  {title: 'More Code'},
  {title: 'Fix Bugs'},
  {title: 'Enjoy'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: TodoItem[]

  constructor(private storageService: StorageService) { 
    this.todoList = storageService.getData(todoListStorageKey) || defaultList
  }

  getTodoList() {
    return this.todoList;
  }
  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList)
  }
  addItem(item: TodoItem) {
    this.todoList.push(item)
    this.saveList()
  }
  updateItem(item: TodoItem, changedItem) {
    const index = this.todoList.indexOf(item)
    this.todoList[index] = { ...item, ...changedItem}
    this.saveList()
  }
  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1)
    this.saveList()
  }

}
