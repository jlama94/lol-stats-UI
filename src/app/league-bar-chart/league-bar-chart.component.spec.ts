import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeagueBarChartComponent } from './league-bar-chart.component';

describe('LeagueBarChartComponent', () => {
  let component: LeagueBarChartComponent;
  let fixture: ComponentFixture<LeagueBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
