import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/services/http.service';

import { UserInputComponent } from './user-input.component';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let service: HttpService;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInputComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
    service = TestBed.inject(HttpService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have label 'Input number'`, ()=> {
    el = fixture.debugElement.nativeElement.querySelector('.number-label');
    expect(el.textContent).toEqual("Input number:");
  });

  it(`should have label 'Choose country code'`, ()=> {
    el = fixture.debugElement.nativeElement.querySelector('.country-label');
    expect(el.textContent).toEqual("Choose country code:");
  });

  it('should initialize correctly', ()=> {
    expect(component.countryCodes).toBeUndefined();
    expect(component.keysCC).toBeUndefined();
    expect(component.numberInput).toEqual("");
    expect(component.selectedOption).toEqual("");
    expect(component.display).toBeFalsy();
    expect(component.numberV).toEqual("");
  });

  it("should not send values", ()=> {
    el = fixture.debugElement.nativeElement.querySelector('.search-button');
    el.click();
    expect(component.numberV).toEqual("aa,");
  });
});
