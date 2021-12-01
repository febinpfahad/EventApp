import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderHomeComponent } from './reminder-home/reminder-home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EventformComponent } from './eventform/eventform.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventdelComponent } from './eventdel/eventdel.component';
import { VieweventComponent } from './viewevent/viewevent.component'


@NgModule({
  declarations: [
    AppComponent,
    ReminderHomeComponent,
    RegisterComponent,
    LoginComponent,
    EventformComponent,
    EventaddComponent,
    EventdelComponent,
    VieweventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
