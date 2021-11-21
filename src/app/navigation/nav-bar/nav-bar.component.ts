import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  public collapse: boolean = false;
  public mode: number = 1;

  @Output() collapseNavBar: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('search',{static: false, read: SearchComponent}) search: SearchComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onCollapse(value: number){
    this.mode = value;
    this.collapse = !this.collapse;
    this.collapseNavBar.emit(this.collapse);
  }

  onSearchIconClick(){
    this.onCollapse(1);
    setTimeout(()=>{
      this.search.focusSearchBar();
    },100);
  }

  get modeName(){
    return this.collapse ? 'collapsed' : 'notCollapsed';
  }

}

export enum NavBarMode{
  Collapsed = 0,
  NotCollapsed = 1
}
