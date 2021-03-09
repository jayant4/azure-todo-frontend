import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrls: ['./tasks-manager.component.css']
})
export class TasksManagerComponent implements OnInit {
public allTasks: any[];
  constructor(ts:TasksService) {
     this.allTasks = ts.mockData;
   }

  ngOnInit(): void {
  }

}
