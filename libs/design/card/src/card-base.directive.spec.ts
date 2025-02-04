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

import { DaffPalette } from '@daffodil/design';

import {
  DaffCardBaseDirective,
  DaffCardOrientation,
} from './card-base.directive';

@Component({
  template: `
		<div daffCardBase [color]="color" [orientation]="orientation"></div>`,
  imports: [
    DaffCardBaseDirective,
  ],
})

class WrapperComponent {
  color: DaffPalette;
  orientation: DaffCardOrientation;
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
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });

  it('should take orientation as an input', () => {
    wrapper.orientation = 'vertical';
    fixture.detectChanges();

    expect(directive.orientation).toEqual('vertical');
  });

  describe('using the orientation property of a card', () => {
    it('should set the default orientation to vertical', () => {
      expect(directive.orientation).toEqual('vertical');
    });

    it('should add the class of the defined orientation to the host element', () => {
      wrapper.orientation = 'vertical';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('vertical')).toEqual(true);
    });

    describe('when orientation="vertical"', () => {
      it('should add a class of "vertical" to the host element', () => {
        wrapper.orientation = 'vertical';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('vertical')).toBeTruthy();
      });
    });

    describe('when orientation="horizontal"', () => {
      it('should add a class of "horizontal" to the host element', () => {
        wrapper.orientation = 'horizontal';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('horizontal')).toBeTruthy();
      });
    });
  });
});
