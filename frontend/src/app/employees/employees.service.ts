import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

interface Response {
  employees: Employee[]
}

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

   private url:string="http://localhost:5266/api/employees";

  constructor(private http:HttpClient) { }
   //permite las llamadas a la api

   
   //Crea empleado
   create(employee:Employee): Observable<Employee>{
      return this.http.post<Employee>(this.url, employee);
   }
   //Obtener un empleado
   get(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.url+'/'+id);
    }
    
    //Obtiene los empleados
   getAll():Observable<Response>{
    return this.http.get<Response>(this.url);
    }

    //Actualizar un empleado
  update(id: string, employee: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.url+'/'+id,employee);

  }
   //Eliminar un empleado
  delete(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.url+'/'+id);

  }

}
