import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from './models/task.model';
import { DateModel } from './models/date.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000/todos'; // Base API URL for all todos-related routes

  constructor(private http: HttpClient) {}

  // Fetch all dates
  getDates(): Observable<DateModel[]> {
    return this.http.get<DateModel[]>(`${this.baseUrl}/dates`);
  }

  
  getDateById(dateId: string): Observable<DateModel> {
    return this.http.get<DateModel>(`${this.baseUrl}/date?dateId=${dateId}`);
  }
  

  getTasksByDate(dateId: string): Observable<{ tasks: TaskModel[]; dateStatus: string }> {
    return this.http.get<{ tasks: TaskModel[]; dateStatus: string }>(`${this.baseUrl}/tasks?dateId=${dateId}`);
  }

  // Create a new date
  createDate(date: string, description?: string): Observable<DateModel> {
    return this.http.post<DateModel>(`${this.baseUrl}/date`, { date, description });
  }

  // Create a new task for a specific date
  createTaskForDate(title: string, dateId: string, timeInterval?: string, money?: number): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.baseUrl}/task`, { title, dateId, timeInterval, money });
  }

  // Update task status
  updateTaskStatus(taskId: string, status: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/task/status`, { taskId, status })
  }
}