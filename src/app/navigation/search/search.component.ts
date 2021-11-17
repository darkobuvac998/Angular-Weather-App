import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor() { }

  private _searchTerm: string = null;

  public set searchTerm(value: string){
    if(value != null){
      this._searchTerm = value;
    }else{
      this._searchTerm = 'Search';
    }
  }

  public get searchTerm(){
    if(this._searchTerm != null){
      return this._searchTerm;
    }else{
      return null;
    }
  }

  onFocusOut(){
    this._searchTerm = null;
  }

  ngOnInit(): void {
  }

}
