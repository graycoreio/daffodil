import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffYoutubePlayerComponent } from './youtube-player.component';

@Component({
  template: `<daff-youtube-player [width]="width" [height]="height"></daff-youtube-player>`,
  imports: [
    DaffYoutubePlayerComponent,
  ],
})

class WrapperComponent {
  width = 100;
  height = 100;
}

describe('@daffodil/design/youtube-player | DaffYoutubePlayerComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffYoutubePlayerComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let playerDE: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-youtube-player'));
    playerDE = fixture.debugElement.query(By.css('.daff-youtube-player'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take `width` as an input', () => {
    wrapper.width = 100;
    fixture.detectChanges();

    expect(component.width).toEqual(100);
  });

  it('should be able to take `height` as an input', () => {
    wrapper.height = 100;
    fixture.detectChanges();

    expect(component.height).toEqual(100);
  });

  it('should throw an error when width is invalid', () => {
    wrapper.width = null;
    expect(() => fixture.detectChanges()).toThrowError(/width/);
  });

  it('should throw an error when height is invalid', () => {
    wrapper.height = undefined;
    expect(() => fixture.detectChanges()).toThrowError(/height/);
  });

  it('sets `max-width` on the host element based on the width', () => {
    wrapper.width = 300;

    fixture.detectChanges();

    expect(de.styles['max-width']).toEqual(wrapper.width + 'px');
  });
});
