import { Component, ViewChild, OnInit } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { TasksService } from '../tasks.service';
import { Task } from '../../tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public inprogress = Array<Task>();
  private todo = Array<Task>();
  private finished = Array<Task>();
  

  constructor(public tasksService: TasksService) {}

  ngOnInit(){
    this.inprogress = this.tasksService.inprogress;
    this.todo = this.tasksService.todo;
    this.finished = this.tasksService.finished;

  }

  doReorder(ev: any) {
    console.log(ev);
    ev.detail.complete();
  }

}
