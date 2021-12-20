import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherBaseComponent } from './weather-base/weather-base.component';
import { WeatherCardBaseComponent } from './weather-card-base/weather-card-base.component';
import { MainRoutingModule } from './main-routing.module';
import { WeatherDataFieldComponent } from './weather-data-field/weather-data-field.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherCardIconComponent } from './weather-card-icon/weather-card-icon.component';



@NgModule({
  declarations: [
    WeatherMainComponent,
    WeatherBaseComponent,
    WeatherCardBaseComponent,
    WeatherDataFieldComponent,
    WeatherCardIconComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  
})
export class MainModule { }
