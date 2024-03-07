import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';

@Component({
  selector: 'app-employees-form',
  standalone: true,
  imports:[],
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  constructor(private employeeService:EmployeesService) { }

  ngOnInit() {
    const form = document.querySelector("#employees-form")
    form?.addEventListener("submit", e => {
      e.preventDefault()
      const id = (<HTMLInputElement> form.querySelector("#inputId")).value
      const fullName = (<HTMLInputElement> form.querySelector("#inputFullName")).value
      const email = (<HTMLInputElement> form.querySelector("#inputEmail")).value
      const charge = (<HTMLInputElement>form.querySelector("#inputCharge")).value
      const salary = Number((<HTMLInputElement>form.querySelector("#inputSalary")).value)
      
      const employee = {id: form.classList.contains("update") ? id : "",fullName,email, charge, salary }

      if(form.classList.contains("update")) {
        this.employeeService.update(id, employee).subscribe(response => {
          console.log(response)
          location.reload()
        })
        return
      }
      this.employeeService.create(employee).subscribe(
        response => {
          console.log(response)
          location.reload()
        }
      )
    })
  }
}
