import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'weather-data-field',
  templateUrl: './weather-data-field.component.html',
  styleUrls: ['./weather-data-field.component.css'],
  // styles: []
})
export class WeatherDataFieldComponent implements AfterViewInit {
  @Input() disabled: boolean = false;
  @Input() value: string = null;

  @ContentChild('labelText', { read: ElementRef })
  labelText: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {}
}
