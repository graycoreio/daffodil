import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
} from '@angular/router';
import {
  filter,
  tap,
} from 'rxjs/operators';

import { RouterPercentEnum } from '../router-percent-enum';


@Component({
  selector: 'demo-routing-indicator',
  templateUrl: './indicator.component.html',
})
export class DemoIndicatorComponent implements OnInit {

  routingPercentage = 0;
  show = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof RouterEvent),
      filter(e => e.constructor.name in RouterPercentEnum),
      tap(e => this.routingPercentage = RouterPercentEnum[e.constructor.name]),
      filter(e => e instanceof NavigationStart),
      tap(e => this.show = true),
    ).subscribe();
  }

  handleFullProgressIndicator(): void{
    this.show = false;
  }
}
