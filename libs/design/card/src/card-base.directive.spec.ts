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

import { DaffPalette } from '@daffodil/design';

import { DaffCardBaseDirective } from './card-base.directive';

@Component({
  template: `
		<div daffCardBase [color]="color()" [orientation]="orientation()" [elevated]="elevated()"></div>`,
  imports: [
    DaffCardBaseDirective,
  ],
})

class WrapperComponent {
  color = signal<DaffPalette>(undefined);
  orientation = signal<string>(undefined);
  elevated = signal<boolean>(undefined);
}

describe('@daffodil/design/card | DaffCardBaseDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let directive: DaffCardBaseDirective;

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
    de = fixture.debugElement.query(By.css('[daffCardBase]'));
    directive = de.injector.get(DaffCardBaseDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('using the color property of a card', () => {
    it('should add the class of the defined color to the host element', () => {
      wrapper.color.set('primary');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });

  it('should set the default orientation to `vertical`', () => {
    expect(de.nativeElement.classList.contains('daff-vertical')).toEqual(true);
  });

  describe('elevated property', () => {
    it('should be able to take `elevated` as an input', () => {
      expect(directive.elevated).toEqual(wrapper.elevated());
    });

    it('should add a class of "elevated" to the host element when elevated is true', () => {
      wrapper.elevated.set(true);
      fixture.detectChanges();

      expect(de.classes['elevated']).toBeTrue();
    });
  });
});
