import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'load-image',
  templateUrl: './load-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadImageComponent {
  loaded = false;

  load(){
    this.loaded = true;
  }
}
