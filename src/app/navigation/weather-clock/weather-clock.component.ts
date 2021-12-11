import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer, interval, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'weather-clock',
  templateUrl: './weather-clock.component.html',
  styleUrls: ['./weather-clock.component.css'],
})
export class WeatherClockComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() public collapsed: boolean = null;

  public seconds: string = null;
  public minutes: string = null;
  public hours: string = null;

  public clock: Observable<Date>;

  ngOnInit(): void {
    this.clock = interval(1000).pipe(
      map(() => new Date()),
      share()
    );

    let time = new Date();
    this.seconds = (time.getSeconds() * -1).toString() + 's';
    this.minutes = (time.getMinutes() * 60 * -1).toString() + 's';
    this.hours = ((time.getHours() + 1) * 3600 * -1).toString() + 's';
  }

  ngOnDestroy() {}
}
