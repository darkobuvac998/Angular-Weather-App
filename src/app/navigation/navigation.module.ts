import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../navigation/nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { CollapseButtonComponent } from './collapse-button/collapse-button.component';

@NgModule({
  declarations: [NavBarComponent, SearchComponent, WeatherIconComponent, CollapseButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavBarComponent, FormsModule],
})
export class NavModule {}
