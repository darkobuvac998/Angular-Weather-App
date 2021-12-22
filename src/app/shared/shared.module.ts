import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LabelTextDirective } from './directives/label-text.directive';
import { CollapseIconComponent } from './collapse-icon/collapse-icon.component';

@NgModule({
  declarations: [LoaderComponent, LabelTextDirective, CollapseIconComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, LabelTextDirective, CollapseIconComponent],
})
export class SharedModule {}
