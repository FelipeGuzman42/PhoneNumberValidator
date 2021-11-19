import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  keysCC: any;
  countryCodes: any;

  numberInput: string = "";
  selectedOption: string = "";
  display = false;
  numberV: string = "";

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getCountryCodes().subscribe(
      (res) => {
        this.countryCodes = res;
        this.keysCC = Object.keys(this.countryCodes);
      }
    );
  }

  getInformation(){
    let code = (this.selectedOption === "") ? 'aa' : this.countryCodes[this.selectedOption].dialling_code;
    this.numberV = code + ',' +this.numberInput;
    this.httpService.updateUrl(this.numberInput, this.selectedOption);
    this.display = true;
  }
}
