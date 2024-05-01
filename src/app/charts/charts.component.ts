import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  testChart = new Chart({
  series: [
    {
      type : 'pie',
      data : [
        {name : 'First', y:1, color: '#eeeeee'},
        {name : 'Second', y:1, color: '#393e64'},
        {name : 'Third', y:1, color: '#00adb5'},
        {name : 'Forth', y:1, color: '#eeeeee'},
        {name : 'Five', y:1, color: '#506ef9'}
      ]
    }

  ]
});

lineChart = new Chart({
  chart : {type : 'line'},
  title: {text: 'Chart Diagram'},
  series : [
    {
      name : 'Diagram Admitted',
      data : [10,2,3,6,9,17,10,5,2,16]
    } as any
  ]
});

pieChart = new Chart({
  chart : {type : 'pie', plotShadow:false},
  credits: {enabled: false},
  plotOptions: {
    pie : {
      innerSize: '99%',
      borderRadius: 10,
      borderColor: '',
      slicedOffset: 10,
      dataLabels: {
        connectorWidth: 0
      }

    }
  },
  title: {
    verticalAlign: 'middle',
    floating : true,
    text : 'Test'
  },
  legend: {
    enabled : false,
  },
  series: [
    {
      type : 'pie',
      data : [
        {name : 'First', y:1, color: '#eeeeee'},
        {name : 'Second', y:1, color: '#393e64'},
        {name : 'Third', y:1, color: '#00adb5'},
        {name : 'Forth', y:1, color: '#eeeeee'},
        {name : 'Five', y:1, color: '#506ef9'}
      ]
    }
  ]
});


}
