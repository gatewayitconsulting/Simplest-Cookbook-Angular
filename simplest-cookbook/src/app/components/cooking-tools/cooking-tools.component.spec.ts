import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingToolsComponent } from './cooking-tools.component';

describe('CookingToolsComponent', () => {
  let component: CookingToolsComponent;
  let fixture: ComponentFixture<CookingToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
