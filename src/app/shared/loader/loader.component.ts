import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements AfterViewInit {

  constructor() { }

  @Input() public subscription: Subscription = null;
  public loading: boolean = null;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.subscription = timer(500).subscribe(() => this.loading = true);
  }

}
