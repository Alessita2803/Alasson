
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesUpdateFormComponent } from './employees-update-form/employees-update-form.component';


@NgModule({
  imports: [
  BrowserModule,
  HttpClientModule,
  ],
  declarations: [		
    AppComponent,
    EmployeesComponent,
      EmployeesFormComponent,
      EmployeesUpdateFormComponent
   ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule { }
