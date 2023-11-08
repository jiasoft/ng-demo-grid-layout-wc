import { Component,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-chart01',
  templateUrl: './chart01.component.html',
  styleUrls: ['./chart01.component.css']
})
export class Chart01Component implements AfterViewInit  {
  @ViewChild('content')
  contentElement: ElementRef|null = null;  
  chart:any;
  constructor(){
  }
  ngAfterViewInit() {
    
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    setTimeout(() => {
      this.chart = echarts.init(this.contentElement?.nativeElement);
      this.chart.setOption(option);
    }, 0);
  }
  ngOnInit() {
  }
}
