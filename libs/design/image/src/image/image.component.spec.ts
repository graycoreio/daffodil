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

import { DaffImageComponent } from './image.component';

@Component({
  template: `<daff-image [src]="src" [alt]="alt" [width]="width" [height]="height" [skeleton]="skeleton"></daff-image>`,
  imports: [
    DaffImageComponent,
  ],
})

class WrapperComponent {
  src = 'assets/image.svg';
  alt = 'image';
  width = 100;
  height = 100;
  skeleton = false;
}

describe('@daffodil/design/image | DaffImageComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffImageComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapperDE: DebugElement;

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
    de = fixture.debugElement.query(By.css('daff-image'));
    wrapperDE = fixture.debugElement.query(By.css('.daff-image__wrapper'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take `src` as an input', () => {
    wrapper.src = '/assets/image.svg';
    fixture.detectChanges();

    expect(component.src).toEqual('/assets/image.svg');
  });

  it('should be able to take `alt` as an input', () => {
    wrapper.alt = 'alt tag';
    fixture.detectChanges();

    expect(component.alt).toEqual('alt tag');
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

  it('should take skeleton as an input', () => {
    wrapper.skeleton = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });

  it('should throw an error when src is invalid', () => {
    wrapper.src = '';
    expect(() => fixture.detectChanges()).toThrowError(/src/);
  });

  it('should throw an error when alt is invalid', () => {
    wrapper.alt = '';
    expect(() => fixture.detectChanges()).toThrowError(/alt/);
  });

  it('should throw an error when width is invalid', () => {
    wrapper.width = null;
    expect(() => fixture.detectChanges()).toThrowError(/width/);
  });

  it('should throw an error when height is invalid', () => {
    wrapper.height = null;
    expect(() => fixture.detectChanges()).toThrowError(/height/);
  });

  it('sets padding-top to an empty string on `.daff-image__wrapper` if width is `0`', () => {
    wrapper.height = 100;
    wrapper.width = 0;

    fixture.detectChanges();

    expect(wrapperDE.styles['paddingTop']).toBeFalsy();
  });

  it('calculates and sets `padding-top` on `.daff-image__wrapper` based on height and width', () => {
    wrapper.height = 100;
    wrapper.width = 300;

    fixture.detectChanges();

    expect(wrapperDE.styles['paddingTop']).toEqual('calc(33.3333%)');
  });

  it('sets `max-width` on the host element based on the width', () => {
    wrapper.width = 300;

    fixture.detectChanges();

    expect(de.styles['max-width']).toEqual(wrapper.width + 'px');
  });
});
