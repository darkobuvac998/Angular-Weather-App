import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';
import { WeatherHourListComponent } from '../weather-hour-list/weather-hour-list.component';

@Component({
  selector: 'weather-base',
  templateUrl: './weather-base.component.html',
  styleUrls: ['./weather-base.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WeatherBaseComponent implements OnInit, OnDestroy {
  public item: Weather;
  public dataSubscription: Subscription;

  @ViewChild('weatherList') weatherList: WeatherHourListComponent;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.dataSubscription = this.mainService.weatherData$.subscribe(
      (item) => {
        if (item != null) {
          this.item = item;
        }
      },
      (err) => console.error(err),
      () => {}
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  onListScroll(value: number){
    if (value == 1) {
      this.weatherList.onNextMoveList();
    } else if (value == -1) {
      this.weatherList.onPreviousMoveList();
    }
  }

}
