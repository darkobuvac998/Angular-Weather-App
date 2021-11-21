import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavBarMode } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.css'],
})
export class CollapseButtonComponent implements OnInit {
  @Input() public collapsed: boolean = null;
  public mode: number = NavBarMode.NotCollapsed;

  @Output() modeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onModeChange() {
    this.mode == NavBarMode.Collapsed
      ? (this.mode = NavBarMode.NotCollapsed)
      : (this.mode = NavBarMode.Collapsed);
    this.modeChange.emit(this.mode);
  }
}
