import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DateModel } from 'src/app/models/date.model';
import { TaskModel } from 'src/app/models/task.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() selectedDateId: string | null = null; // Selected date ID
  newTaskTitle: string = ''; 
  tasks: TaskModel[] = []; 
  newTaskInterval: string = ''; 
  selectedDate?: DateModel ;

  constructor(private todosService: TodoService) {}

  ngOnInit() {
    if (this.selectedDateId) {
      this.loadTasksForDate(this.selectedDateId);
      console.log(this.selectedDate?.date)
    }
  }
  
  fetchDateById(dateId: string) {
    this.todosService.getDateById(dateId).subscribe(
      (response) => {
        this.selectedDate = response; 
      },
      (error) => {
        console.error('Error fetching date:', error); 
      }
    );
  }
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDateId'] && changes['selectedDateId'].currentValue) {
      this.loadTasksForDate(changes['selectedDateId'].currentValue);
    }
  }
 

  loadTasksForDate(dateId: string) {
    console.log("hhh")
    this.todosService.getTasksByDate(dateId).subscribe((response) => {
      this.tasks = response.tasks;
    });
    this.fetchDateById(dateId);
  }

  updateTaskStatus(taskId: string, status: string) {
    this.todosService.updateTaskStatus(taskId, status).subscribe(() => {
      this.loadTasksForDate(this.selectedDateId!); 
    });
  }

  addTask() {
    if (this.newTaskTitle.trim() && this.selectedDateId) {
      this.todosService.createTaskForDate(this.newTaskTitle, this.selectedDateId, this.newTaskInterval)
        .subscribe((newTask: TaskModel) => {
          this.tasks.push(newTask); 
          this.newTaskTitle = ''; 
          this.newTaskInterval = ''; 
        });
    }
  }

  toggleTaskStatus(taskId: string) {
    const task = this.tasks.find((t) => t._id === taskId);
    if (task) {
      task.status = task.status === 'done' ? 'in-progress' : 'done'; 
      this.updateTaskStatus(taskId, task.status);
    }
  }

}








