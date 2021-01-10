import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
public title: string;
public text: string;

  constructor(public activatedRoute: ActivatedRoute, public tasksService: TasksService) { }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    let display: any = this.tasksService.getElement(id);

    this.title = display.title;
    this.text = display.text;
  }

}
