import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DateModel } from 'src/app/models/date.model';
import { TodoService } from 'src/app/todo.service';

interface DateProgress {
  totalTasks: number;
  completedTasks: number;
  completionPercentage: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MessageService] 
})
export class SidebarComponent implements OnInit {
  @Output() dateSelected = new EventEmitter<string>(); 
  dates: DateModel[] = []; 
  dateTaskMap: { [key: string]: DateProgress } = {}; // Map to store task progress for each date
  newDate = { date: '', description: '' }; 
  loading = false; 
  errorMessage = '';

  constructor(private todoService: TodoService, private messageService: MessageService) {}

  ngOnInit() {
    this.fetchDates(); 
  }

  fetchDates(): void {
    this.loading = true;
    this.todoService.getDates().subscribe(
      (dates) => {
        this.dates = dates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.processTaskData(); 
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading dates';
        this.loading = false;
      }
    );
  }
  

  processTaskData(): void {
    this.dates.forEach(date => {
      this.todoService.getTasksByDate(date._id).subscribe(
        response => {
          const tasks = response.tasks;
          const totalTasks = tasks.length; 
          const completedTasks = tasks.filter(task => task.status === 'done').length; 
          const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
          this.dateTaskMap[date._id] = {
            totalTasks: totalTasks,
            completedTasks: completedTasks,
            completionPercentage: completionPercentage
          };
        },
        error => {
          console.error(`Error fetching tasks for date ${date._id}:`, error);
          this.dateTaskMap[date._id] = {
            totalTasks: 0,
            completedTasks: 0,
            completionPercentage: 0
          };
        }
      );
    });
  }
  

  selectDate(dateId: string) {
    console.log('Selecting date with ID:', dateId);
    this.dateSelected.emit(dateId); 
  }

  addDate() {
    if (this.newDate.date) {
      const dateExists = this.dates.some(date => new Date(date.date).toDateString() === new Date(this.newDate.date).toDateString());
      console.log(dateExists);
      if (dateExists) {
        console.log("we are here")
        this.messageService.add({ severity: 'error', summary: 'Date Exists', detail: 'This to-do list already exists.' });
        return; 
      }

      this.todoService.createDate(this.newDate.date, this.newDate.description).subscribe(
        (createdDate) => {
          this.dates.push(createdDate);
          this.newDate = { date: '', description: '' };
        },
        (error) => {
          console.error('Error adding new date:', error);
        }
      );
    }
  }

}