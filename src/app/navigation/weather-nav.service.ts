import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherNavService {
  private _places: PlaceData[];

  public get places(): PlaceData[] {
    return this._places;
  }
  public set places(value: any) {
    if (value != null) {
      this._places = value;
    }
  }

  constructor(
    private http: HttpClient,
    @Inject('API_NOMINATIM_URL') private apiUrl: String
  ) {}

  getPlaceNames(value: string) {
    return this.http
      .get<Object[]>(`${this.apiUrl}?q=${value}&format=jsonv2`)
      .pipe(
        map((result: Object[]) => {
          let places = plainToInstance<PlaceData, Object>(PlaceData, result);
          return places;
        }),
        map((places) => {
          return places.map(
            (place) =>
              ({
                display_name: place.display_name,
                type: place.type,
                lat: place.lat,
                lon: place.lon,
              } as PlaceData)
          );
        }),
        map((places) => filterPlaces(places))
      );
  }

  logPlaces(): void {
    setTimeout(() => {
      console.log(this.places);
    }, 1500);
  }
}

export class PlaceData {
  display_name: string;
  type: string;
  lat: number;
  lon: number;
}

export function filterPlaces(places: PlaceData[]): PlaceData[] {
  let filteredPlaces: Array<PlaceData> = [];
  while (places.length > 0) {
    let head = places.shift();
    filteredPlaces.push(head);
    places = places.filter((place) => {
      return (
        Math.round(place.lon) != Math.round(head.lon) ||
        Math.round(place.lat) != Math.round(head.lat)
      );
    });
  }
  return filteredPlaces;
}
