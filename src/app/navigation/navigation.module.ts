import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../navigation/nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { CollapseButtonComponent } from './collapse-button/collapse-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeSelectButtonComponent } from './time-select-button/time-select-button.component';
import { WeatherTimeSelectComponent } from './weather-time-select/weather-time-select.component';
import { PinLocationButtonComponent } from './pin-location-button/pin-location-button.component';
import { WeatherClockComponent } from './weather-clock/weather-clock.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent,
    WeatherIconComponent,
    CollapseButtonComponent,
    TimeSelectButtonComponent,
    WeatherTimeSelectComponent,
    PinLocationButtonComponent,
    WeatherClockComponent
  ],
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  exports: [NavBarComponent, FormsModule],
})
export class NavModule {}
