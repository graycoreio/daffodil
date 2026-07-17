import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffImageComponent } from '@daffodil/design/image';

@Component({
  template: `
    <daff-image
      [src]="src()"
      [alt]="alt()"
      [width]="width()"
      [height]="height()"
      [skeleton]="skeleton()"
      [priority]="priority()">
    </daff-image>`,
  imports: [
    DaffImageComponent,
  ],
})

class WrapperComponent {
  src = signal('assets/image.svg');
  alt = signal('image');
  width = signal(100);
  height = signal(100);
  skeleton = signal(false);
  priority = signal(false);
}

describe('@daffodil/design/image | DaffImageComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffImageComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    component = de.componentInstance;
  });

  it('should be able to take `src` as an input', () => {
    wrapper.src.set('/assets/image.svg');
    fixture.detectChanges();

    expect(component.src()).toEqual('/assets/image.svg');
  });

  it('should be able to take `alt` as an input', () => {
    wrapper.alt.set('alt tag');
    fixture.detectChanges();

    expect(component.alt()).toEqual('alt tag');
  });

  it('should be able to take `width` as an input', () => {
    wrapper.width.set(100);
    fixture.detectChanges();

    expect(component.width()).toEqual(100);
  });

  it('should be able to take `height` as an input', () => {
    wrapper.height.set(100);
    fixture.detectChanges();

    expect(component.height()).toEqual(100);
  });

  it('should take skeleton as an input', () => {
    wrapper.skeleton.set(true);
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });

  it('should take priority as an input', () => {
    wrapper.priority.set(true);
    fixture.detectChanges();

    expect(component.priority()).toEqual(true);
  });

  it('should throw an error when src is invalid', () => {
    wrapper.src.set('');
    expect(() => fixture.detectChanges()).toThrowError(/src/);
  });

  it('should throw an error when alt is invalid', () => {
    wrapper.alt.set('');
    expect(() => fixture.detectChanges()).toThrowError(/alt/);
  });

  it('should throw an error when width is invalid', () => {
    wrapper.width.set(null);
    expect(() => fixture.detectChanges()).toThrowError(/width/);
  });

  it('should throw an error when height is invalid', () => {
    wrapper.height.set(undefined);
    expect(() => fixture.detectChanges()).toThrowError(/height/);
  });

  it('should calculate and set `aspect-ratio` on `.daff-image` based on the width and height', () => {
    wrapper.width.set(300);
    wrapper.height.set(100);

    fixture.detectChanges();

    expect(de.styles['aspect-ratio']).toEqual('300 / 100');
  });

  it('sets `max-width` on the host element based on the width', () => {
    wrapper.width.set(300);

    fixture.detectChanges();

    expect(de.styles['max-width']).toEqual(wrapper.width() + 'px');
  });
});
