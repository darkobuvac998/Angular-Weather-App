import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'time-select-button',
  templateUrl: './time-select-button.component.html',
  styleUrls: ['./time-select-button.component.css']
})
export class TimeSelectButtonComponent implements OnInit {

  @Input() btnMode: number = null;
  @Input() timeTitle: string = null;

  constructor() { }

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onSelect(){
    console.log(this.btnMode);
    this.selected.emit(this.btnMode);
  }

}

export enum TimeSelectButtonMode{
  Today = 0,
  Tomorrow = 1, 
  SevenDays = 7
}
