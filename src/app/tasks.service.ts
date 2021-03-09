import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public mockData:Array<any> ;


  constructor() { 
    this.mockData = [
      {
        taskName : "t1",
        isFinished : false
      },
      {
        taskName : "t2",
        isFinished : false
      },
      {
        taskName : "t3",
        isFinished : false
      },
      {
        taskName : "t4",
        isFinished : false
      }
    ]
  }

}
