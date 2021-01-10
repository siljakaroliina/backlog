import { Injectable } from '@angular/core';
import { Task } from '../tasks';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public inprogress = Array<Task>();
  public todo = Array<Task>();
  public finished = Array<Task>();
  
  constructor() {
    this.inprogress.push(new Task(1, 'Task1', 'Test content1'), new Task(2, 'Task 2', 'test content2'));
    this.todo.push(new Task(3, 'Task3', 'Test content3'), new Task(4, 'Task 4', 'test content4'));
    this.finished.push(new Task(5, 'Task1', 'Test content5'), new Task(6, 'Task 6', 'test content2'));
  }
  getElement(id: number) {
    for (const ip of this.inprogress) {
      if (ip.id === id) {
        return ip;
      }
    }
    for (const td of this.todo) {
      if (td.id === id) {
        return td;
      }
    }
    for (const fs of this.finished){
      if (fs.id === id){
        return fs;
      }
    }
  }
  addTask(title:string, text:string){
    const id: number = this.inprogress.length + this.todo.length + this.finished.length;
    this.todo.push(new Task(id, title, text));
  }
}
