import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherBaseComponent } from './weather-base/weather-base.component';

export const MainContentRoutes: Routes = [
  {
    path: '',
    component: WeatherBaseComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MainContentRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
