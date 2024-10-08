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
  let mockTabComponent: jasmine.SpyObj<DaffTabComponent>;

  beforeEach(waitForAsync(() => {
    mockTabComponent = jasmine.createSpyObj('DaffTabComponent', [], {
      id: 'mock-tab-id',
      panelId: 'mock-panel-id',
    });

    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        {
          provide: DaffTabComponent,
          useValue: mockTabComponent,
        },
      ],
    }).compileComponents();
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

  it('should assign the `ariaLabelledBy` value to the `aria-labelledby` attribute', () => {
    expect(de.attributes['aria-labelledby']).toBe(component.ariaLabelledBy);
  });

  it('should assign the `tabPanelId` value to the `id` attribute', () => {
    expect(de.attributes['id']).toBe(component.tabPanelId);
  });

  it('should set ariaLabelledBy to the tab id', () => {
    expect(component.ariaLabelledBy).toBe(mockTabComponent.id);
  });

  it('should set _id to the tab panelId', () => {
    expect(component['_id']).toBe(mockTabComponent.panelId);
  });
});
