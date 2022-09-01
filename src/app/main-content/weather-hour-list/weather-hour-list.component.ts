import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Hour } from 'src/app/models/hour.model';
import { Weather } from 'src/app/models/weather.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'weather-hour-list',
  templateUrl: './weather-hour-list.component.html',
  styleUrls: ['./weather-hour-list.component.css'],
  styles: [':host{scroll-behavior: smooth !important;}']
})
export class WeatherHourListComponent implements OnInit {

  @Input() item: Weather;
  public hours: Hour[];
  public indexStart: number;

  @ViewChild('list', {read: ElementRef}) list: ElementRef<any>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.hours = this.item?.forecast?.forecastday[this.mainService.timeSelected].hour;
    // this.indexStart = new Date().getHours();
    this.indexStart = 1;
  }

  onNextMoveList(){
    this.list.nativeElement.scrollTo({left: (this.list.nativeElement.scrollLeft += 300), behavior: 'smooth'});
  }
  onPreviousMoveList(){
    this.list.nativeElement.scrollTo({
      left: (this.list.nativeElement.scrollLeft -= 300),
      behavior: 'smooth',
    });
  }

}
