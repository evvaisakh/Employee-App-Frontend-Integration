import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeedataService } from './employeedata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    HomeComponent,
    EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
