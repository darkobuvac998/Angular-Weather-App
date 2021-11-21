import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-time-select',
  templateUrl: './weather-time-select.component.html',
  styleUrls: ['./weather-time-select.component.css']
})
export class WeatherTimeSelectComponent implements OnInit {

  @Input() public collapsed: boolean = null;

  constructor() { }

  ngOnInit(): void {
  }

}
