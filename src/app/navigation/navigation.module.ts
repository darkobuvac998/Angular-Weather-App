import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../navigation/nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], 
  exports: [NavBarComponent, FormsModule]
})
export class NavModule { }
