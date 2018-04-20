import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../company.service';
import { Company } from '../company';
import { forEach } from '@firebase/util';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: any;
  searchResult = 0;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanyList();
  }

  getCompanyList() {
    // Use snapshotChanges().map() to store the key
    this.companyService.getCompanyList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.companies = companies;
      this.searchResult = companies.length;
    });
  }

  deleteCompany() {
    this.companyService.deleteAll();
  }

  getCompanyByName(name) {
    this.companyService.getCompanyList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      if(name == '') {
        this.companies = companies;
        this.searchResult = companies.length;
      } else {
        this.companies = [];
        this.searchResult = 0;
        companies.forEach(company => {
          if(company.name.toLowerCase().search(name.toLowerCase()) != -1) {
            this.companies.push(company);
            this.searchResult++;
          } 
        });
      }
    });
  }

  search($event) {
    let queryString = $event.target.value;
    this.getCompanyByName(queryString);
  }
}
