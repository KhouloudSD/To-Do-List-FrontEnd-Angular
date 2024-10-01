import { Component, OnInit } from '@angular/core';
import { DateModel } from './models/date.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  selectedDateId: string | null = null; // Store the selected date ID

  onDateSelected(dateId: string) {
    this.selectedDateId = dateId; // Update the selected date ID
    console.log('Selected Date ID in App Component:', dateId);
  }

}
