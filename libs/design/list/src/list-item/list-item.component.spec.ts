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

import { DaffListItemComponent } from './list-item.component';

@Component({
  template: `
    <daff-list-item>List Item</daff-list-item>
    <a daff-list-item>List Item</a>
  `,
  imports: [
    DaffListItemComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/list | DaffListItemComponent', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let itemDE: DebugElement;
  let anchorDE: DebugElement;
  let listItem: DaffListItemComponent;
  let anchorListItem: DaffListItemComponent;

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
    de = fixture.debugElement.query(By.css('daff-list-item'));
    wrapper = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-list-item>', () => {
    beforeEach(() => {
      itemDE = fixture.debugElement.query(By.css('daff-list-item'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-list-item]'));
      listItem = itemDE.componentInstance;
      anchorListItem = anchorDE.componentInstance;
    });

    it('should add a class of "daff-list-item" to the host element', () => {
      expect(itemDE.classes).toEqual(jasmine.objectContaining({
        'daff-list-item': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-list-item': true,
      }));
    });

    describe('if it is used without an anchor element', () => {
      it('should have a role of listitem', () => {
        expect(listItem.role).toBe('listitem');
      });
    });

    describe('if it is used with an anchor element', () => {
      it('should not have a role applied', () => {
        expect(anchorListItem.role).toBe(null);
      });
    });
  });
});
