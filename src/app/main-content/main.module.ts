import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherBaseComponent } from './weather-base/weather-base.component';
import { WeatherCardBaseComponent } from './weather-card-base/weather-card-base.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    WeatherMainComponent,
    WeatherBaseComponent,
    WeatherCardBaseComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
