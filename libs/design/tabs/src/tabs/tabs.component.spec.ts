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

import { DaffTabComponent } from './tab/tab.component';
import { DaffTabsComponent } from './tabs.component';

@Component({
  template: `
    <daff-tabs>
      <daff-tab></daff-tab>
    </daff-tabs>
  `,
  standalone: true,
  imports: [
    DaffTabsComponent,
    DaffTabComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/tabs | DaffTabsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTabsComponent;
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
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-tabs'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-tabs" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-tabs': true,
    }));
  });
});
