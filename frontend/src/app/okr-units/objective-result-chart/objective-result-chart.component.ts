import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ObjectiveComponent } from '../../okrview/objective/objective.component';
import { ObjectiveViewMapper } from '../../shared/services/mapper/objective-view.mapper';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexLegend
} from 'ng-apexcharts';
import { OkrDepartment } from '../../shared/model/ui/OrganizationalUnit/okr-department';
import { Observable } from 'rxjs';
import {ObjectiveId, OkrUnitId} from "../../shared/model/id-types";
import {OkrChildUnit} from "../../shared/model/ui/OrganizationalUnit/okr-child-unit";
import { ViewObjective } from '../../shared/model/ui/view-objective';

export interface ChartOptions {      // hier später ein Interface nutzen!
  series: ApexNonAxisChartSeries;
  seriesOne: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  colors: string[];
}

@Component({
  selector: 'app-objective-result-chart',
  templateUrl: './objective-result-chart.component.html',
  styleUrls: ['./objective-result-chart.component.scss']
})
export class ObjectiveResultChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() objectiveComponent: ObjectiveComponent;
  @Input() departmentSchema$: Observable<OkrDepartment[]>;
  chartOptions: Partial<ChartOptions>;
  departmentSchema: OkrDepartment[];
  obj: ObjectiveComponent;
  objevtiveViewMapper: ObjectiveViewMapper;
  objObser$: Observable<ViewObjective>;
  objektiveINeed: ViewObjective;
  constructor() {
    this.chartOptions = {
      colors: ['#546E7A', '#B81F40'],
      series: [50,50],
      chart: {
        width: 140,
        type: 'pie'
      },
      legend: {
        show: false
      },
    };
  }

  ngOnInit(): void {
    this.departmentSchema$.subscribe(departmentSchema => this.departmentSchema = departmentSchema);
    //console.log(this.getResult(120));
  }
  getNumberOfEmployees(): number {
    let numbersOfEmployees: number = 0;

    this.departmentSchema?.forEach((department: OkrDepartment) => {
      if (department.okrMemberIds != null) {
        numbersOfEmployees += department.okrMemberIds.length;
      }
    });

    return numbersOfEmployees;
  }
  /*getResult(newValue: number): number{
    this.newObjective$.subscribe(objectiveComponent => this.objectiveComponent = objectiveComponent);
    this.objectiveComponent.updateObjectiveProgress(newValue);

    return this.objectiveComponent.getProgressValueForObjective();
  }*/
  setArray(ToDo: number, Done: number){
    this.chartOptions.series[0] = ToDo;
    this.chartOptions.series[1] = Done;
  }
}
