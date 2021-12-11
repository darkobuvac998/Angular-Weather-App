import { Routes } from "@angular/router";
import { WeatherBaseComponent } from "./main-content/weather-base/weather-base.component";
import { WeatherIconComponent } from "./navigation/weather-icon/weather-icon.component";
import { LoaderComponent } from "./shared/loader/loader.component";

export const appRoutes: Routes = [
    {path: 'weather', component: WeatherBaseComponent}
]