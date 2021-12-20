import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() places: Place[];
  @Input() collapsed: boolean;

  public selectedPlace: Place;

  @Output() onResultItemClick: EventEmitter<Place> = new EventEmitter<Place>();

  constructor() {}

  ngOnInit(): void {}

  handleOnResultItemClick(item: Place) {
    this.onResultItemClick.emit(item);
    this.selectedPlace = item;
    this.places = [];
    this.places.push(item);
  }
}
