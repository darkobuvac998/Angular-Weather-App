import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { appRoutes } from './appRoutes.routes';
import { NavModule } from './navigation/navigation.module';
import { HttpService } from './services/http.service';
import { MainService } from './services/main.service';
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
    },
    {
      provide: 'HEADERS',
      useValue: httpHeadersFactory()
    },
    {
      provide: HttpService,
      useClass: HttpService
    }, 
    MainService
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

export function httpHeadersFactory() {
  let headers: HttpHeaders = new HttpHeaders({
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': '61bbab777dmshf47abef888d106bp18342djsnddd763958468',
  });
  return headers;
}

export function httpServiceFactory(http: HttpClient){
  // return new HttpService(ht)
}
export function mainServiceFactory(httpService: HttpService){
  return new MainService(httpService);
}
