import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pin-location-button',
  templateUrl: './pin-location-button.component.html',
  styleUrls: ['./pin-location-button.component.css'],
})
export class PinLocationButtonComponent implements OnInit {
  @Input() public collapsed: boolean = null;

  public showIconText: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMouseEnterIcon() {
    this.showIconText = true;
  }
  onMouseLeaveIcon() {
    this.showIconText = false;
  }
}
