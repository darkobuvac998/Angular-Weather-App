import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Weather } from '../models/weather.model';
import { QueryParameters } from '../shared/QueryParameters.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,

    @Inject('X-RAPID-CURRENT') private currentUrl: string,
    @Inject('X-RAPID-FORECAST') private forecastUrl: string,
    @Inject('HEADERS') private httpHeaders: HttpHeaders
  ) {}

  public getCurrent(urlValue: string, params: QueryParameters) {
    let url = this.buildUrl(urlValue, params);
    return this.http.get<Object>(`${url}`, { headers: this.httpHeaders }).pipe(
      map((result: Object) => {
        let items = plainToInstance<Weather, Object>(Weather, result);
        return items;
      }),
      map(
        (result) =>
          ({
            current: result?.current,
            forecast: result?.forecast,
            location: result?.location,
          } as Weather)
      ),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public getForecast(urlValue: string, params: QueryParameters) {
    let url = this.buildUrl(urlValue, params);
    return this.http.get<Object>(`${url}`, { headers: this.httpHeaders }).pipe(
      map((result: Object) => {
        let item = plainToInstance<Weather, Object>(Weather, result);
        return item;
      }),
      map(
        (result) =>
          ({
            current: result?.current,
            forecast: result?.forecast,
            location: result?.location,
          } as Weather)
      ),
      catchError((err) => throwError(err))
    );
  }

  private buildUrl(value: string, params: QueryParameters) {
    if (value == 'current') {
      let url = `${this.currentUrl}?q=${params.q}`;
      if (params.days != null) {
        return `${url}&${params.days}`;
      } else {
        return url;
      }
    } else if (value == 'forecast') {
      let url = `${this.forecastUrl}?q=${params.q}`;
      if (params.days != null) {
        return `${url}&${params.days}`;
      } else {
        return url;
      }
    } else {
      return null;
    }
  }
}
