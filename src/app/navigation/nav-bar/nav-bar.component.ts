import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public collapse: boolean = false;

  @Output() collapseNavBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCollapse(){
    this.collapse = !this.collapse;
    this.collapseNavBar.emit(this.collapse);
  }

}

export enum NavBarMode{
  Collapsed = 0,
  NotCollapsed = 1
}
