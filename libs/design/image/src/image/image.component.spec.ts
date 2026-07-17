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
      [height]="height()">
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
}

describe('@daffodil/design/image | DaffImageComponent | Defaults', () => {
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
    de = fixture.debugElement.query(By.css('daff-image'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be a priority image by default', () => {
    expect(component.priority()).toEqual(false);
  });
});
