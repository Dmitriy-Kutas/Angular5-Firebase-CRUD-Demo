import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Company } from './company';

@Injectable()
export class CompanyService {

  private dbPath = '/companies';

  companiesRef: AngularFireList<Company> = null;

  constructor(public db: AngularFireDatabase) {
    this.companiesRef = db.list(this.dbPath);
  }

  createCompany(company: Company): void {
    this.companiesRef.push(company);
  }

  updateCompany(key: string, value: any): void {
    this.companiesRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteCompany(key: string): void {
    this.companiesRef.remove(key).catch(error => this.handleError(error));
  }

  getCompanyList(): AngularFireList<Company> {
    return this.companiesRef;
  }

  deleteAll(): void {
    this.companiesRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

  /*
  * You can use this code for querying lists.
  * Reference link : https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
  *
  getCustomersByName(name: string): AngularFireList<Company> {
    if(name == '') {
      this.companiesRef = this.db.list(this.dbPath);
    } else {
      this.companiesRef =this.db.list(this.dbPath, ref => ref.orderByChild('name').equalTo(name));
    }
    return this.companiesRef;
  }
  */
}
