import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';

import { CompanyService } from './company/company.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
