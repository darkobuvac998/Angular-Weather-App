import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'weather-base',
  templateUrl: './weather-base.component.html',
  styleUrls: ['./weather-base.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WeatherBaseComponent implements OnInit, OnDestroy {
  public item: Weather;
  public dataSubscription: Subscription;

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
}
