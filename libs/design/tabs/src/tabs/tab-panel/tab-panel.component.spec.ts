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

import { DaffTabPanelComponent } from './tab-panel.component';
import { DaffTabComponent } from '../tab/tab.component';

@Component({
  template: `
		<daff-tab-panel></daff-tab-panel>
	`,
  standalone: true,
  imports: [
    DaffTabPanelComponent,
  ],
})
class WrapperComponent {
  selected: boolean;
}

describe('@daffodil/design/tabs | DaffTabPanelComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTabPanelComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        DaffTabComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-tab-panel'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-tab-panel" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-tab-panel': true,
    }));
  });

  it('should set the role to tabpanel', () => {
    expect(component.role).toBe('tabpanel');
  });

  it('should set the tabindex to 0', () => {
    expect(component.tabIndex).toBe('0');
  });
});
