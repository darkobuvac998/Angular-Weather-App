import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day.model';
import { Weather } from 'src/app/models/weather.model';
import { Colors } from 'src/app/shared/colors';
import { Time } from 'src/app/shared/selectedTime';

@Component({
  selector: 'app-weather-card-base',
  templateUrl: './weather-card-base.component.html',
  styleUrls: ['./weather-card-base.component.css'],
})
export class WeatherCardBaseComponent implements OnInit {
  public background: string = null;
  public item: Weather = null;
  public weatherIcon: any;
  public time: any;
  @Input()
  public showDetail: boolean = false;
  @Input()
  public showAstro: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  calculateBackground(value: number): void {
    let day = this.item.forecast?.forecastday[value].day;
    let maxTempColor = Colors.getColorByTemperature(day.maxtemp_c).replace('\'', '');
    let minTempColor = Colors.getColorByTemperature(day.mintemp_c);
    this.background = `linear-gradient(to bottom, ${maxTempColor} 0%,${maxTempColor} 50%, ${minTempColor} 50%, ${minTempColor} 100%)`;
  }
}
