import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveResultChartComponent } from './objective-result-chart.component';

describe('ObjectiveResultChartComponent', () => {
  let component: ObjectiveResultChartComponent;
  let fixture: ComponentFixture<ObjectiveResultChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveResultChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveResultChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
