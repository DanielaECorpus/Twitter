import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginPComponent } from './dashboard-login-p.component';

describe('DashboardLoginPComponent', () => {
  let component: DashboardLoginPComponent;
  let fixture: ComponentFixture<DashboardLoginPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLoginPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoginPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
