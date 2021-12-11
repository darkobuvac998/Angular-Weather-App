import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { Place } from 'src/app/models/place.model';
import { WeatherNavService } from '../weather-nav.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit {
  @Input() public collapsed: boolean = false;
  public showIconText: boolean = null;

  @Output() searchIcon: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('inputField') input: ElementRef<any>;

  selectedPlace: boolean = true;

  places$: Observable<Place[]>;

  constructor(public navService: WeatherNavService) {}

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.input?.nativeElement, 'input')
      .pipe(
        map((event) => this.input?.nativeElement.value),
        filter((data: string) => data?.length >= 3),
        map(res => {this.navService.loading = true; return res}),
        debounceTime(800),
        distinctUntilChanged()
      )
      .subscribe(
        (result) => {
          this.places$ = this.navService.getPlaceNames(result);
        },
        (err: any) => {
          console.log(err);
        },
        () => {}
      );
  }

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
    if (!this.selectedPlace) {
      this._searchTerm = null;
    }
  }

  onMouseHoverIcon() {
    this.showIconText = !this.showIconText;
  }

  onSearchIconClick() {
    this.showIconText = false;
    this.searchIcon.emit();
  }

  focusSearchBar() {
    this.input.nativeElement.select();
  }
}
