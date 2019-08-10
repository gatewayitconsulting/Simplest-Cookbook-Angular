import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToddyRatioHelperComponent } from './toddy-ratio-helper.component';

describe('ToddyRatioHelperComponent', () => {
  let component: ToddyRatioHelperComponent;
  let fixture: ComponentFixture<ToddyRatioHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToddyRatioHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToddyRatioHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
