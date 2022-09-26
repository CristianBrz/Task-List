import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-task'

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() task: Task = TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
