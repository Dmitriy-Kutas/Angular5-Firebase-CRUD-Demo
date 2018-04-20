import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Company} from '../company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = new Company();
  submitted = false;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save() {
    this.companyService.createCompany(this.company);
    this.company = new Company();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
