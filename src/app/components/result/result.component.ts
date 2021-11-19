import { Component, Input, OnChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from '../validation';
import { ValidationError } from '../validationError';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {
  @Input() prop: string = '';

  validation!: Validation;
  isValid = false;
  response: any;
  validationError: ValidationError = new ValidationError({type: ""});
  isError = false;
  isPrefix = false;

  constructor(private httpService: HttpService) { }

  ngOnChanges(): void {
    this.httpService.getValidationNumber()
    .subscribe(
      (res) => {
        this.response = res;
        if (this.response.success === undefined){
          this.validation = new Validation(res);
          this.isValid = this.validation.valid;
          if (!this.isValid){
            this.isError = false;
            this.isPrefix = false;
            let numberC = this.validation.number.toString();
            let prefix = this.prop.split(',')[0].slice(1);
            if (numberC.substring(prefix.length,prefix.length*2) == prefix) this.isPrefix = true;
          }
        } else {
          this.isError = true;
          this.isPrefix = false;
          this.validationError = new ValidationError(this.response.error);
          this.isValid = this.response.success;
        }
      }
    );
  }
}
