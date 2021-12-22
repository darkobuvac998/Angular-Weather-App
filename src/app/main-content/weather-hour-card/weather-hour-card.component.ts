import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Hour } from 'src/app/models/hour.model';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';
import { WeatherCardBaseComponent } from '../weather-card-base/weather-card-base.component';

@Component({
  selector: 'weather-hour-card',
  templateUrl: './weather-hour-card.component.html',
  styleUrls: ['./weather-hour-card.component.css'],
})
export class WeatherHourCardComponent extends WeatherCardBaseComponent {
  @Input() index: number = null;

  public hour: Hour;
  public indexStart: number;

  public get time() {
    return this.hour?.time.split(' ')[1];
  }

  constructor(public mainService: MainService) {
    super(mainService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hour =
      this.item?.forecast?.forecastday[this.mainService.timeSelected]?.hour[
        this.index
      ];
    super.ngOnChanges(changes);
  }

  ngOnInit(): void {
    this.showMainTemplate = true;
    this.showDetail = false;
    this.showDetailAdvanced = false;
    this.indexStart = new Date().getHours();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.hour =
      this.item?.forecast?.forecastday[this.mainService.timeSelected]?.hour[
        this.index
      ];
  }

  onShowDetail(){
    this.showMainTemplate = !this.showMainTemplate;
    this.showDetailAdvanced = !this.showDetailAdvanced;
  }
}
