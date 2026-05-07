import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DemoIndicatorComponent } from './routing/indicator/indicator.component';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, DemoIndicatorComponent],
})
export class AppComponent {}
