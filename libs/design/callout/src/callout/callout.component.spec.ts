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

import {
  DaffPalette,
  DaffTextAlignment,
} from '@daffodil/design';

import { DaffCalloutComponent } from './callout.component';

@Component ({
  template: `
    <daff-callout [color]="color" [textAlignment]="textAlignment" [compact]="compact"></daff-callout>
  `,
  imports: [
    DaffCalloutComponent,
  ],
})

class WrapperComponent {
  color: DaffPalette;
  textAlignment: DaffTextAlignment;
  compact: boolean;
}

describe('@daffodil/design/callout | DaffCalloutComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffCalloutComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

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
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-callout'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-callout>', () => {
    it('should add a class of "daff-callout" to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout')).toBeTruthy();
    });
  });

  it('should take color as an input', () => {
    wrapper.color = 'primary';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
  });

  it('should take textAlignment as an input', () => {
    wrapper.textAlignment = 'left';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-left')).toEqual(true);
  });

  it('should take compact as an input', () => {
    wrapper.compact = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-compact')).toEqual(true);
  });
});
