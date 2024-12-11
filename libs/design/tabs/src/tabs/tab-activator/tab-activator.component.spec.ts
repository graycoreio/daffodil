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

import { DaffTabActivatorComponent } from './tab-activator.component';

@Component({
  template: `
		<button daff-tab-activator [selected]="selected" [tabActivatorId]="tabActivatorId" [panelId]="panelId">Tab Activator</button>
		<a daff-tab-activator [selected]="selected" [tabActivatorId]="tabActivatorId" [panelId]="panelId">Tab Activator</a>
	`,
  standalone: true,
  imports: [
    DaffTabActivatorComponent,
  ],
})
class WrapperComponent {
  selected: boolean;
  tabActivatorId: string;
  panelId: string;
}

describe('@daffodil/design/tabs | DaffTabActivatorComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTabActivatorComponent;
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

    de = fixture.debugElement.query(By.css('[daff-tab-activator]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-tab-activator" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-tab-activator': true,
    }));
  });

  it('should set the role to tab', () => {
    expect(component.role).toBe('tab');
  });

  it('should take panelId as an input', () => {
    expect(component.panelId).toEqual(wrapper.panelId);
  });

  describe('when selected is true', () => {
    beforeEach(() => {
      wrapper.selected = true;
      fixture.detectChanges();
    });

    it('should set aria-selected to true', () => {
      expect(component.ariaSelected).toBe(true);
    });

    it('should set tabindex to 0', () => {
      expect(component.tabIndex).toBe('0');
    });
  });

  describe('when selected is false', () => {
    beforeEach(() => {
      wrapper.selected = false;
      fixture.detectChanges();
    });

    it('should set aria-selected to false', () => {
      expect(component.ariaSelected).toBe(false);
    });

    it('should set tabindex to -1', () => {
      expect(component.tabIndex).toBe('-1');
    });
  });

  it('should assign the value of panelId to ariaControls', () => {
    component.ngOnInit();

    expect(component.ariaControls).toBe(component.panelId);
  });

  describe('tabActivatorId', () => {
    it('should take tabActivatorId as an input', () => {
      expect(component.tabActivatorId).toEqual(wrapper.tabActivatorId);
    });

    it('should assign the `tabActivatorId` value to the `id` attribute', () => {
      expect(de.attributes['id']).toBe(component.tabActivatorId);
    });
  });

  it('should call the native element focus method', () => {
    spyOn(de.nativeElement, 'focus');

    component.focus();

    expect(de.nativeElement.focus).toHaveBeenCalledWith();
  });
});
