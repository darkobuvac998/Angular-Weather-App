import { Component, Input, OnInit } from '@angular/core';
import { Hour } from 'src/app/models/hour.model';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-weather-hour-list',
  templateUrl: './weather-hour-list.component.html',
  styleUrls: ['./weather-hour-list.component.css']
})
export class WeatherHourListComponent implements OnInit {

  @Input() item: Weather;
  public hours: Hour[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.hours = this.item?.forecast?.forecastday[this.mainService.timeSelected].hour;
  }

}
