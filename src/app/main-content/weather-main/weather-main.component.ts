import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';
import { WeatherCardBaseComponent } from '../weather-card-base/weather-card-base.component';
import { WeatherCardIconComponent } from '../weather-card-icon/weather-card-icon.component';

@Component({
  selector: 'weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
  host: {},
})
export class WeatherMainComponent extends WeatherCardBaseComponent {
  constructor(public mainService: MainService) {
    super(mainService);
  }

  @ViewChild('weahterIcon') weahterIcon: WeatherCardIconComponent;

  ngOnInit(): void {
    this.showMainTemplate = true;
    this.showDetail = true;
    this.showDetailAdvanced = false;
  }

  onShowDetail() {
    this.showMainTemplate = !this.showMainTemplate;
    this.showDetailAdvanced == null
      ? (this.showDetailAdvanced = null)
      : (this.showDetailAdvanced = !this.showDetailAdvanced);
    this.showDetail == null
      ? (this.showDetail = null)
      : (this.showDetail = !this.showDetail);
  }
}
