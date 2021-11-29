import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlaceData } from '../weather-nav.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() places: PlaceData[];
  @Input() collapsed: boolean;

  public selectedPlace: PlaceData;

  @Output() onResultItemClick: EventEmitter<PlaceData> = new EventEmitter<PlaceData>();

  constructor() { }

  ngOnInit(): void {
  }

  handleOnResultItemClick(item: PlaceData){
    console.log(item);
    this.onResultItemClick.emit(item);
    this.selectedPlace = item;
    this.places = [];
    this.places.push(item);
  }



}
