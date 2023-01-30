import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeAnimalsComponent } from './employee/employee-animals/employee-animals.component';
import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
import { EmployeePromoComponent } from './employee/employee-promo/employee-promo.component';
import { EmployeeTicketsComponent } from './employee/employee-tickets/employee-tickets.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VisitorContactComponent } from './visitor/visitor-contact/visitor-contact.component';
import { VisitorEventsComponent } from './visitor/visitor-events/visitor-events.component';
import { VisitorTicketsComponent } from './visitor/visitor-tickets/visitor-tickets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'visitorTickets', component: VisitorTicketsComponent },
  { path: 'visitorEvents', component: VisitorEventsComponent },
  { path: 'visitorAnimals', component: VisitorContactComponent },
  { path: 'employeeTickets', component: EmployeeTicketsComponent },
  { path: 'employeeAnimals', component: EmployeeAnimalsComponent },
  { path: 'employeePromo', component: EmployeePromoComponent },
  { path: 'employeeEvents', component: EmployeeEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
