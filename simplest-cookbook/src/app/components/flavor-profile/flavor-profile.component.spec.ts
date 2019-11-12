import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorProfileComponent } from './flavor-profile.component';

describe('FlavorProfileComponent', () => {
  let component: FlavorProfileComponent;
  let fixture: ComponentFixture<FlavorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
