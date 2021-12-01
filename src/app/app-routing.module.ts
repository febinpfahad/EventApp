import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventformComponent } from './eventform/eventform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReminderHomeComponent } from './reminder-home/reminder-home.component';
import { VieweventComponent } from './viewevent/viewevent.component';

const routes: Routes = [
  {
    path:'',component:ReminderHomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'eventform',component:EventformComponent
  },
  {
    path:'eventadd',component:EventaddComponent
  },
  {
    path:'eventview',component:VieweventComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
