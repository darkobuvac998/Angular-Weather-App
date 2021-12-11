import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { appRoutes } from './appRoutes.routes';
import { NavModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: 'X-RAPIDAPI-HOST',
      useValue: 'weatherapi-com.p.rapidapi.com',
    },
    {
      provide: 'X-RAPIDAPI-KEY',
      useValue: '61bbab777dmshf47abef888d106bp18342djsnddd763958468',
    },
    {
      provide: 'X-RAPID-CURRENT',
      useValue: 'https://weatherapi-com.p.rapidapi.com/current.json'
    },
    {
      provide: 'X-RAPID-FORECAST',
      useValue: 'https://weatherapi-com.p.rapidapi.com/forecast.json'
    }
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
