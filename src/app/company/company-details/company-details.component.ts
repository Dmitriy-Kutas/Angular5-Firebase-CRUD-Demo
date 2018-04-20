import { Component, OnInit, Input } from '@angular/core';

import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.companyService.updateCompany(this.company.key, { active: isActive });
  }

  deleteCompany() {
    this.companyService.deleteCompany(this.company.key);
  }

}
