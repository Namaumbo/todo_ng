import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UncompleteComponent } from './uncomplete/uncomplete.component';
import { CompleteComponent } from './complete/complete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms'
import { ToDoService } from './to-do.service';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UncompleteComponent,
    CompleteComponent,
    NavbarComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
