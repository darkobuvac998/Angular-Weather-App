import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Weather } from 'src/app/models/weather.model';
import { Colors } from 'src/app/shared/colors';

@Component({
  selector: 'weather-temp-chart',
  templateUrl: './weather-temp-chart.component.html',
  styleUrls: ['./weather-temp-chart.component.css'],
  styles: [':host{width: 100%; height: 80%;}'],
})
export class WeatherTempChartComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item: Weather;
  public chart: Chart;
  public labels: string[];
  public temperature: number[];
  public borderColor1: string;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.temperature = this.item?.forecast?.forecastday[0].hour?.map((hour) => {
      return hour?.temp_c;
    });
    this.borderColor1 = Colors.getColorByTemperature(this.item.current?.temp_c);
    if (this.chart) {
      this.chart.data.datasets[0].data = this.temperature;
      this.chart.data.datasets[0].borderColor = this.borderColor1;
      this.chart?.update();
    }
  }

  ngOnInit(): void {
    this.borderColor1 = Colors.getColorByTemperature(this.item?.current.temp_c);
    this.labels = this.item.forecast.forecastday[0].hour?.map((hour) => {
      return hour?.time.split(' ')[1];
    });
    this.temperature = this.item.forecast?.forecastday[0].hour?.map((hour) => {
      return hour?.temp_c;
    });
    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Temperature',
            data: this.temperature,
            fill: true,
            borderColor: this.borderColor1,
            tension: 0.35,
            borderCapStyle: 'butt',
            pointBorderWidth: 4,
            pointStyle: 'circle',
            pointHitRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              align: 'center',
              text: 'Hours',
              padding: 10,
              color: this.borderColor1
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              align: 'center',
              text: 'Temperature',
              padding: 10,
              color: 'white'
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            display: true,
            align: 'center',
            labels: { color: this.borderColor1 },
            title: { text: 'Legend' },
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.chart.destroy();
  }
}
