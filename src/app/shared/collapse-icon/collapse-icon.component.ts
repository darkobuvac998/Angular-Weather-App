import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'collapse-icon',
  templateUrl: './collapse-icon.component.html',
  styleUrls: ['./collapse-icon.component.css'],
  styles: [
    ':host{transform: scale(1,1); color: whitesmoke; opacity: 0.5; cursor: pointer;}',
  ],
  animations: [
    trigger('pulse', [
      state('start', style({transform: 'scale(1,1)'})),
      state('end', style({transform: 'scale(1,1)'})),
      transition('*<=>*', [
        animate(
          '2s',
          keyframes([
            style({ transform: 'scale(1,1)' }),
            style({ transform: 'scale(1,1.5)' }),
            style({ transform: 'scale(1,2)' }),
            style({ transform: 'scale(1,2.5)' }),
            style({ transform: 'scale(1,3)' }),
            style({ transform: 'scale(1,3.5)' }),
            style({ transform: 'scale(1,4)' }),
            style({ transform: 'scale(1,4)' }),
            style({ transform: 'scale(1,3.5)' }),
            style({ transform: 'scale(1,3)' }),
            style({ transform: 'scale(1,2.5)' }),
            style({ transform: 'scale(1,2)' }),
            style({ transform: 'scale(1,1.5)' }),
            style({ transform: 'scale(1,1)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CollapseIconComponent implements OnInit {
  @Input() public direction: string;
  @Output() public clicked: EventEmitter<any> = new EventEmitter<any>();

  public animate: string = 'start';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clicked.emit();
  }

  onAnimationDone(){
    this.animate = this.animate == 'start' ? 'end' : 'start';
  }
}
