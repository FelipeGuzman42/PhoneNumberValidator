import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/services/http.service';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let service: HttpService;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
    service = TestBed.inject(HttpService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have default title 'Number not valid'", ()=> {
    el = fixture.debugElement.nativeElement.querySelector('h2');
    expect(el.textContent).toEqual("Number not valid");
  });

  it("Should have default subtitle 'Invalid number...'", ()=> {
    el = fixture.debugElement.nativeElement.querySelector('h3');
    expect(el.textContent).toEqual(" Given number was invalid Try another phone number ");
  });

  it('should initialize correctly', ()=> {
    expect(component.prop).toEqual("");
    expect(component.validation).toBeUndefined();
    expect(component.response).toBeUndefined();
    expect(component.isValid).toBeFalsy();
    expect(component.isError).toBeFalsy();
    expect(component.isPrefix).toBeFalsy();
  });
});
