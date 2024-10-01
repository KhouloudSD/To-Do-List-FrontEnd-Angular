import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { BrowserAnimationsModule }  
    from "@angular/platform-browser/animations";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodoComponent } from './components/todo/todo.component'; 
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    ListboxModule,
    HttpClientModule,
    InputNumberModule,
    CommonModule,
		FormsModule,
    InputMaskModule,
    CheckboxModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
