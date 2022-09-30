import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() task: Task = TASKS[0];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
