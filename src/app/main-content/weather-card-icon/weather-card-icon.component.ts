import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Conditions } from 'src/app/shared/conditions';

@Component({
  selector: 'weather-card-icon',
  templateUrl: './weather-card-icon.component.html',
  styleUrls: ['./weather-card-icon.component.css'],
  animations: [
    trigger('pulse', [
      state('start', style({ transform: 'scale(1,1)' })),
      state('end', style({ transform: 'scale(1,1)' })),
      transition('*<=>*', [
        animate(
          '2s',
          keyframes([
            style({ transform: 'scale(0.6,0.6)' }),
            style({ transform: 'scale(0.8,0.8)' }),
            style({ transform: 'scale(1,1)' }),
            style({ transform: 'scale(1.2,1.2)' }),
            style({ transform: 'scale(1,1)' }),
            style({ transform: 'scale(0.8,0.8)' }),
            style({ transform: 'scale(0.6,0.6)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class WeatherCardIconComponent implements OnInit, OnChanges {
  @Input() public condition: string;
  public conditions = Object.values(Conditions) as string[];
  public startAnimate = 'start';

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startAnimate = null;
    let isDefault = this.conditions.includes(this.condition);
    if (!isDefault) {
      this.condition = 'Default';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.ngOnInit();
  }

  onAnimationEnd() {
    this.startAnimate == 'start'
      ? (this.startAnimate = 'end')
      : (this.startAnimate = 'start');

    this.changeDetector.detectChanges();
  }
}
