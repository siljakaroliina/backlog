import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
public title: string;
public text: string;

  constructor(public router: Router, public tasksService: TasksService) { }

  ngOnInit() {
  }
  save(){
    this.tasksService.addTask(this.title, this.text);
    this.router.navigateByUrl('/home');
  }

  close(){
    this.router.navigateByUrl('/home');
  }

}
