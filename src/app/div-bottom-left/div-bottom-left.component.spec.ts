import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivBottomLeftComponent } from './div-bottom-left.component';

describe('DivBottomLeftComponent', () => {
  let component: DivBottomLeftComponent;
  let fixture: ComponentFixture<DivBottomLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivBottomLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivBottomLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
