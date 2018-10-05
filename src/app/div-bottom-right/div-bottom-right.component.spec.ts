import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivBottomRightComponent } from './div-bottom-right.component';

describe('DivBottomRightComponent', () => {
  let component: DivBottomRightComponent;
  let fixture: ComponentFixture<DivBottomRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivBottomRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivBottomRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
