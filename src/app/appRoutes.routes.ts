import { Routes } from '@angular/router';
import { WeatherBaseComponent } from './main-content/weather-base/weather-base.component';

export const appRoutes: Routes = [
  { path: 'weather', loadChildren: () => import('./main-content/main.module').then( m => m.MainModule) },
];
