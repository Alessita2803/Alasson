import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone:true,
  imports: [NgFor],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

 employees:Employee[]=[];

  constructor(private employeeService:EmployeesService) { }

  delete(id: string) {
    this.employeeService.delete(id).subscribe(
      response => {
        console.log(response)
        location.reload()
      }
    )
  }
  update(employee: Employee){
    (<HTMLInputElement> document.querySelector("#inputId")).value = employee.id
    document.querySelector("#employees-form")?.classList.add("update")
    ;(<HTMLInputElement> document.querySelector("button")).innerText = "Update Employee"
    ;(<HTMLInputElement> document.querySelector("#inputFullName")).value = employee.fullName
    ;(<HTMLInputElement> document.querySelector("#inputEmail")).value = employee.email
    ;(<HTMLInputElement> document.querySelector("#inputCharge")).value = employee.charge
    ;(<HTMLInputElement> document.querySelector("#inputSalary")).value = employee.salary.toString()
  }
 
  ngOnInit(): void{
    this.employeeService.getAll().subscribe(
      response => {
        this.employees= response.employees
      }
    )
  }
}


