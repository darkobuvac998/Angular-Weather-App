import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() public collapsed: boolean = false;
  public showIconText: boolean = null;

  @Output() searchIcon: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('inputField') input: ElementRef;

  constructor() {}

  private _searchTerm: string = null;

  public set searchTerm(value: string) {
    if (value != null) {
      this._searchTerm = value;
    } else {
      this._searchTerm = 'Search';
    }
  }

  public get searchTerm() {
    if (this._searchTerm != null) {
      return this._searchTerm;
    } else {
      return null;
    }
  }

  onFocusOut() {
    this._searchTerm = null;
  }

  ngOnInit(): void {}

  onMouseHoverIcon() {
    this.showIconText = !this.showIconText;
  }

  onSearchIconClick() {
    this.showIconText = false;
    this.searchIcon.emit();
  }

  focusSearchBar(){
    this.input.nativeElement.select();
  }
}
