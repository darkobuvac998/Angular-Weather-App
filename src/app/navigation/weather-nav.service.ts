import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import { from, Observable, throwError } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherNavService {
  private _places: Place[];

  public get places(): Place[] {
    return this._places;
  }
  public set places(value: any) {
    if (value != null) {
      this._places = value;
    }
  }

  public loading: boolean = null;

  constructor(
    private http: HttpClient,
    @Inject('X-RAPID-SEARCH') private apiUrl: String,
    @Inject('X-RAPIDAPI-HOST') private host: String,
    @Inject('X-RAPIDAPI-KEY') private key: String
  ) {}

  getPlaceNames(value: string) {
    this.loading = true;
    let headers: HttpHeaders = new HttpHeaders({
      'x-rapidapi-host': this.host.toString(),
      'x-rapidapi-key': this.key.toString(),
    });
    return this.http
      .get<Object[]>(`${this.apiUrl}?q=${value}`, { headers: headers })
      .pipe(
        map((result: Object[]) => {
          let places = plainToInstance<Place, Object>(Place, result);
          return places;
        }),
        map((places) => {
          return places.map(
            (place) =>
              ({
                country: place.country,
                id: place.id,
                lat: place.lat,
                lon: place.lon,
                name: place.name,
                region: place.region,
                url: place.url,
              } as Place)
          );
        }),
        map((res) => {
          this.loading = false;
          return res;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  logPlaces(): void {
    setTimeout(() => {
      console.log(this.places);
    }, 1500);
  }
}

