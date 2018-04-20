import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'company', component: CompanyListComponent },
  { path: 'add', component: CreateCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
