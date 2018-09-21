import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[loading-icon]',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  host: {'class': 'loading-icon'},
  encapsulation: ViewEncapsulation.None
})
export class LoadingIconComponent { }
