import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'], 
})
export class NavBarComponent implements OnInit {

  public collapse: boolean = false;
  public mode: number = 1;

  @Output() collapseNavBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCollapse(value: number){
    this.mode = value;
    this.collapse = !this.collapse;
    this.collapseNavBar.emit(this.collapse);
  }

  get modeName(){
    return this.collapse ? 'collapsed' : 'notCollapsed';
  }

}

export enum NavBarMode{
  Collapsed = 0,
  NotCollapsed = 1
}
