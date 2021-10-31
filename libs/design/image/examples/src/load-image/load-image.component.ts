import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'load-image',
  templateUrl: './load-image.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadImageComponent {

  loaded: boolean = false;

  load(){
    this.loaded = true;
  }
}