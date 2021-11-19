import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private countriesUrl = 'http://apilayer.net/api/countries?access_key=eb588dbf70cb81df1c8d374269db9d18';
  private numberUrl = 'http://apilayer.net/api/validate?access_key=eb588dbf70cb81df1c8d374269db9d18';

  constructor(private http: HttpClient) { }

  getCountryCodes(){
    return this.http.get(this.countriesUrl);
  }

  updateUrl(celNumber: string, code: string){
    this.numberUrl = this.numberUrl + "&number="+celNumber + '&country_code='+code;
  }

  getValidationNumber(){
    return this.http.get(this.numberUrl);
  }
}
