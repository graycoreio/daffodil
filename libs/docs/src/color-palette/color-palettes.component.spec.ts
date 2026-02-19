import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DaffDocsSassItemFactory,
  provideDaffDocsSassFactories,
} from '@daffodil/docs/testing';
import {
  DaffDocsSassItem,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

import { DaffDocsColorPalettesComponent } from './color-palettes.component';

@Component({
  template: `
		<daff-docs-color-palettes [items]="itemsValue"></daff-docs-color-palettes>
	`,
  imports: [
    DaffDocsColorPalettesComponent,
  ],
})
class WrapperComponent {
  itemsValue: Array<DaffDocsSassItem> | undefined = [];
}

describe('@daffodil/docs-components | DaffDocsColorPalettesComponent', () => {
  let component: DaffDocsColorPalettesComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let factory: DaffDocsSassItemFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideDaffDocsSassFactories(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    factory = TestBed.inject(DaffDocsSassItemFactory);
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.itemsValue = factory.createMany(3);
    wrapper.itemsValue[0].group.push('color-palettes');
    wrapper.itemsValue[1].group.push('color-palettes');
    fixture.detectChanges();
    component = fixture.debugElement.query(By.directive(DaffDocsColorPalettesComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a palette for each color', () => {
    if(!wrapper.itemsValue) {
      console.error('Test misconfiguration.');
      fail();
      return;
    }
    wrapper.itemsValue.slice(0, 2).forEach((color) => {
      const palette = fixture.debugElement.query(By.css(`.daff-docs-color__palette.daff-docs-color__brand-${color.context.name.toLowerCase()}`));
      expect(palette).toBeTruthy();
      if (color.context.parsedValue.type === DaffDocsSassType.MAP) {
        Object.keys(color.context.parsedValue.parsed).forEach((shade) => {
          expect((<HTMLElement>palette.nativeElement).innerHTML).toContain(shade);
        });
      }
    });
  });

  it('should not throw an error when items is undefined', () => {
    wrapper.itemsValue = undefined;
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
