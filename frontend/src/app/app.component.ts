import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NgFor } from '@angular/common';
import { EmployeesFormComponent } from './employees-form/employees-form.component';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, NgFor, EmployeesComponent, EmployeesFormComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export  class AppComponent {
  title = 'Employee Alasson';
}  
