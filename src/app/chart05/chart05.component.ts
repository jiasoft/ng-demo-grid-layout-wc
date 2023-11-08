import { Component, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart05',
  templateUrl: './chart05.component.html',
  styleUrls: ['./chart05.component.css']
})
export class Chart05Component {
  @ViewChild('content')
  contentElement: ElementRef|null = null;  
  chart:any;
  ngAfterViewInit() {
    setTimeout(() => {
      this.chart = echarts.init(this.contentElement?.nativeElement);
       
      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            detail: {
              formatter: '{value}'
            },
            data: [
              {
                value: 50,
                name: 'SCORE'
              }
            ]
          }
        ]
      };
      this.chart.setOption(option);
    }, 0);
  }
}
