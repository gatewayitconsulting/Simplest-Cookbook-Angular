import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookTimeComponent } from './cook-time.component';

describe('CookTimeComponent', () => {
  let component: CookTimeComponent;
  let fixture: ComponentFixture<CookTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
