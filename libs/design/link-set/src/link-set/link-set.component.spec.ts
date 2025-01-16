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

import { DaffLinkSetComponent } from './link-set.component';

@Component ({
  template: `<daff-link-set></daff-link-set>`,
  imports: [
    DaffLinkSetComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/link-set | DaffLinkSetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffLinkSetComponent;

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
    de = fixture.debugElement.query(By.css('daff-link-set'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-link-set>', () => {
    it('should add a class of "daff-link-set" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-link-set': true,
      }));
    });
  });
});
