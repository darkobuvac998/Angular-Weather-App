import { Component, OnInit } from '@angular/core';
import { WeatherCardBaseComponent } from '../weather-card-base/weather-card-base.component';

@Component({
  selector: 'weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent extends WeatherCardBaseComponent {

  constructor() { super() }

  ngOnInit(): void {
  }

}
