import {
  ChangeDetectorRef,
  Component,
  DebugElement,
  QueryList,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTabComponent } from './tab/tab.component';
import { DaffTabActivatorComponent } from './tab-activator/tab-activator.component';
import { DaffTabLabelComponent } from './tab-label/tab-label.component';
import { DaffTabsComponent } from './tabs.component';
import { DAFF_TABS_COMPONENTS } from '../tabs';

@Component({
  template: `
    <daff-tabs (tabChange)="onTabChange($event)">
      <daff-tab>
        <daff-tab-label>
          Tab 1
        </daff-tab-label>
        <daff-tab-panel>
          Tab 1 Panel
        </daff-tab-panel>
      </daff-tab>

      <daff-tab id="tab-2">
        <daff-tab-label>
          Tab 2
        </daff-tab-label>
        <daff-tab-panel>
          Tab 2 Panel
        </daff-tab-panel>
      </daff-tab>

      <daff-tab>
        <daff-tab-label>
          Tab 2
        </daff-tab-label>
        <daff-tab-panel>
          Tab 2 Panel
        </daff-tab-panel>
      </daff-tab>
    </daff-tabs>
  `,
  standalone: true,
  imports: [
    DAFF_TABS_COMPONENTS,
  ],
})
class WrapperComponent {
  changed: string | null = null;

  onTabChange(val: string) {
    this.changed = val;
  }
}

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
      providers: [
        ChangeDetectorRef,
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

  it('should set selectedTab to initiallySelected if provided', () => {
    component.initiallySelected = 'tab-2';
    component.ngAfterContentInit();
    expect(component._tabs.toArray()[1].id).toEqual(component.initiallySelected);
  });

  it('should display a warning if select is called with a tab that does not exist', () => {
    console.warn = jasmine.createSpy('warn');

    component.select('custom-tab');

    expect(console.warn).toHaveBeenCalledWith(`The tab 'custom-tab' was not able to be selected because it does not exist. Check the id on your <daff-tab>s.`);
  });

  it('should set selectedTab to the first tab if initiallySelected is not provided', () => {
    component.initiallySelected = null;
    component.ngAfterContentInit();
    expect(component.selectedTab).toBe(component._tabs.toArray()[0].id);
  });

  it('should emit tabChange when a tab is selected', () => {
    const id = component._tabs.toArray()[1].id;

    wrapper.changed = null;
    component.select(id);
    expect(wrapper.changed).toEqual(id);
  });

  it('should focus on the selected tab when select is called', () => {
    const index = 1;
    const tab = fixture.debugElement.queryAll(By.directive(DaffTabActivatorComponent))[index].nativeElement;

    component.select(component._tabs.toArray()[index].id);

    expect(document.activeElement).toEqual(tab);
  });

  it('should navigate to the previous tab when previous is called', () => {
    component.select(component._tabs.toArray()[1].id);

    component.previous();

    const previousTab = fixture.debugElement.queryAll(By.directive(DaffTabActivatorComponent))[0].nativeElement;

    expect(document.activeElement).toEqual(previousTab);
  });

  it('should navigate to the next tab when next is called', () => {
    component.select(component._tabs.toArray()[0].id);

    component.next();

    const nextTab = fixture.debugElement.queryAll(By.directive(DaffTabActivatorComponent))[1].nativeElement;

    expect(document.activeElement).toEqual(nextTab);
  });

  it('should skip disabled tabs when navigating', () => {
    component.select(component._tabs.toArray()[0].id);

    const tab = component._tabs.toArray()[1];
    tab.disabled = true;
    fixture.detectChanges();

    component.next();

    expect(component.selectedTab).toBe(component._tabs.toArray()[2].id);
  });

  it('should select the first tab when selectFirst is called', () => {
    const event = new KeyboardEvent('keydown');
    component.selectFirst(event);

    expect(component.selectedTab).toBe(component._tabs.toArray()[0].id);
  });

  it('should select the first tab when selectLast is called', () => {
    const event = new KeyboardEvent('keydown');
    component.selectLast(event);

    const lastTab = component._tabs.toArray()[component._tabs.toArray().length - 1].id;

    expect(component.selectedTab).toBe(lastTab);
  });
});
