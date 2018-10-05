import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRegisterLargeComponent } from './input-register-large.component';

describe('InputRegisterLargeComponent', () => {
  let component: InputRegisterLargeComponent;
  let fixture: ComponentFixture<InputRegisterLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRegisterLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRegisterLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
