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

import { DaffListItemComponent } from '@daffodil/design/list';

@Component({
  template: `
    <daff-list-item>List Item</daff-list-item>
    <a daff-list-item [active]="active()">List Item</a>
  `,
  imports: [
    DaffListItemComponent,
  ],
})
class WrapperComponent {
  active = signal(false);
}

describe('@daffodil/design/list | DaffListItemComponent', () => {
  let wrapper: WrapperComponent;
  let itemDE: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let anchorDE: DebugElement;

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
    itemDE = fixture.debugElement.query(By.css('daff-list-item'));
    wrapper = itemDE.componentInstance;
    anchorDE = fixture.debugElement.query(By.css('a[daff-list-item]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-list-item" to the host element', () => {
    expect(itemDE.classes).toEqual(jasmine.objectContaining({
      'daff-list-item': true,
    }));

    expect(anchorDE.classes).toEqual(jasmine.objectContaining({
      'daff-list-item': true,
    }));
  });

  it('should have a role of listitem if it is used without an anchor element', () => {
    expect(itemDE.nativeElement.role).toBe('listitem');
  });

  it('should not have a role applied if it is used with an anchor element', () => {
    expect(anchorDE.nativeElement.role).toBe(null);
  });

  it('should not add the "active" class by default', () => {
    expect(itemDE.classes['active']).toBeFalsy();
  });

  it('should add the "active" class when `active` is set', () => {
    fixture.componentInstance.active.set(true);
    fixture.detectChanges();

    expect(anchorDE.classes['active']).toBe(true);
  });
});
