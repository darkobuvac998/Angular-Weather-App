import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Weather } from '../models/weather.model';
import { QueryParameters } from '../shared/QueryParameters.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public weather: Weather;
  private weatherData: Subject<Weather> = new Subject<Weather>();
  public weatherData$: Observable<Weather> = this.weatherData.asObservable();

  public timeSelected: number = 0;

  constructor(private httpService: HttpService) {}

  public getCurrent(params: QueryParameters) {
    this.httpService.getCurrent('current', params).subscribe(
      (result) => {
        this.weather = result;
        this.weatherData.next(result);
      },
      (error) => {
        console.error(error);
      },
      () => {}
    );
  }

  public getForecast(params: QueryParameters) {
    this.httpService.getForecast('forecast', params).subscribe(
      (result) => {
        (this.weather = result), this.weatherData.next(result);
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
  }
}
