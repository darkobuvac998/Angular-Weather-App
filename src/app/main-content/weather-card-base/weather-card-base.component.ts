import {
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Day } from 'src/app/models/day.model';
import { Weather } from 'src/app/models/weather.model';
import { Colors } from 'src/app/shared/colors';
import { Time } from 'src/app/shared/selectedTime';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'weather-card-base',
  templateUrl: './weather-card-base.component.html',
  styleUrls: ['./weather-card-base.component.css'],
  styles: [':host{width: auto; height: auto}']
})
export class WeatherCardBaseComponent implements OnInit, OnChanges, AfterViewInit {
  public background: string = null;
  @Input()
  public item: Weather;
  public weatherIcon: any;
  public time: any;
  @Input()
  public showDetail: boolean = null;
  @Input()
  public showDetailAdvanced: boolean = false;
  @Input()
  public showMainTemplate: boolean = true;

  @ContentChild('mainTemplate', { static: false, read: TemplateRef })
  mainTemplate: TemplateRef<any>;
  @ContentChild('detailTemplate', { static: false, read: TemplateRef })
  detailTemplate: TemplateRef<any>;
  @ContentChild('detailAdvancedTemplate', { static: false, read: TemplateRef })
  detailAdvancedTemplate: TemplateRef<any>;

  constructor(public mainService: MainService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateBackground(0);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
      
  }

  calculateBackground(value: number): void {
    if (this.item?.forecast) {
      let day = this.item?.forecast?.forecastday[value].day;
      let maxTempColor = Colors.getColorByTemperature(day.maxtemp_c).replace(
        "'",
        ''
      );
      let minTempColor = Colors.getColorByTemperature(day.mintemp_c);
      this.background = `linear-gradient(to bottom, ${maxTempColor}, ${minTempColor})`;
    }
  }
  onHover(): void {
    this.showMainTemplate = !this.showMainTemplate;
    this.showDetail == null
      ? (this.showDetail = null)
      : (this.showDetail = !this.showDetail);
    this.showDetailAdvanced == null
      ? (this.showDetailAdvanced = null)
      : (this.showDetailAdvanced = !this.showDetailAdvanced);
  }
}
