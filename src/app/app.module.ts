import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

// KendoUI
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { GridModule } from '@progress/kendo-angular-grid';
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { DataAccessService } from './services/data-service/data-access.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    IndicatorsModule
  ],
  providers: [DataAccessService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
