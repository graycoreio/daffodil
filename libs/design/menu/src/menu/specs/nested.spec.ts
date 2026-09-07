import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  template: `
    <button [daffMenuActivator]="rootMenu" id="activator">Open</button>

    <ng-template #rootMenu>
      <daff-menu>
        <button daff-menu-item id="leaf">Leaf</button>
        <button daff-menu-item [daffMenuActivator]="subMenu" trigger="click" id="parent">Parent</button>
        <button daff-menu-item id="last">Last</button>
      </daff-menu>
    </ng-template>

    <ng-template #subMenu>
      <daff-menu>
        <button daff-menu-item id="sub-leaf">Sub leaf</button>
      </daff-menu>
    </ng-template>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class NestedMenuWrapperComponent {}

const KEY_CODES: Record<string, number> = {
  Tab: 9,
  Escape: 27,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
};

const keydown = (key: string) => {
  const event = new KeyboardEvent('keydown', { key, bubbles: true });
  // `FocusKeyManager` reads the deprecated `keyCode`, which a synthetic event leaves at 0.
  Object.defineProperty(event, 'keyCode', { get: () => KEY_CODES[key] });

  return event;
};

describe('@daffodil/design/menu | Nested menu | Usage', () => {
  let fixture: ComponentFixture<NestedMenuWrapperComponent>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  const menus = () => overlayContainerElement.querySelectorAll('.daff-menu');
  const backdrops = () => overlayContainerElement.querySelectorAll('.cdk-overlay-backdrop');
  const openRoot = () => {
    fixture.debugElement.query(By.css('#activator')).nativeElement.click();
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };
  const openSubmenu = () => {
    (<HTMLElement>overlayContainerElement.querySelector('#parent')).click();
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };
  const keyEvent = (selector: string, key: string) => {
    overlayContainerElement.querySelector(selector).dispatchEvent(keydown(key));
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NestedMenuWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(NestedMenuWrapperComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open the root menu with a backdrop', fakeAsync(() => {
    openRoot();

    expect(menus().length).toBe(1);
    expect(backdrops().length).toBe(1);
  }));

  it('should mark the parent item with aria-haspopup and a submenu indicator', fakeAsync(() => {
    openRoot();

    const parent = <HTMLElement>overlayContainerElement.querySelector('#parent');
    expect(parent.getAttribute('aria-haspopup')).toBe('menu');
    expect(parent.querySelector('.daff-menu-item__submenu-indicator')).not.toBeNull();
  }));

  it('should open the submenu as a flyout without adding a second backdrop', fakeAsync(() => {
    openRoot();
    openSubmenu();

    expect(menus().length).toBe(2);
    expect(backdrops().length).toBe(1);
  }));

  it('should reflect the open state on the parent item with aria-expanded', fakeAsync(() => {
    openRoot();
    openSubmenu();

    const parent = <HTMLElement>overlayContainerElement.querySelector('#parent');
    expect(parent.getAttribute('aria-expanded')).toBe('true');
  }));

  it('should focus the first item of the root menu when it opens', fakeAsync(() => {
    openRoot();

    expect(document.activeElement).toBe(overlayContainerElement.querySelector('#leaf'));
  }));

  it('should close the submenu and return focus to the parent item on ArrowLeft', fakeAsync(() => {
    openRoot();
    openSubmenu();

    keyEvent('#sub-leaf', 'ArrowLeft');

    expect(menus().length).toBe(1);
    expect(document.activeElement).toBe(overlayContainerElement.querySelector('#parent'));
  }));

  it('should point the keyboard back at the parent item once its submenu closes', fakeAsync(() => {
    openRoot();
    openSubmenu();

    keyEvent('#sub-leaf', 'Escape');
    expect(document.activeElement).toBe(overlayContainerElement.querySelector('#parent'));

    keyEvent('#parent', 'ArrowDown');

    expect(document.activeElement).toBe(overlayContainerElement.querySelector('#last'));
  }));

  it('should close every open menu on Tab so focus can move to the next focusable element after the activator', fakeAsync(() => {
    openRoot();

    keyEvent('#leaf', 'Tab');

    expect(menus().length).toBe(0);
  }));

  it('should close all menus when a submenu item is clicked', fakeAsync(() => {
    openRoot();
    openSubmenu();

    (<HTMLElement>overlayContainerElement.querySelector('#sub-leaf')).click();
    fixture.detectChanges();
    flush();

    expect(menus().length).toBe(0);
  }));

  it('should close open submenus when the root menu closes', fakeAsync(() => {
    openRoot();
    openSubmenu();
    expect(menus().length).toBe(2);

    (<HTMLElement>backdrops()[0]).click();
    fixture.detectChanges();
    flush();

    expect(menus().length).toBe(0);
  }));
});

@Component({
  template: `
    <button [daffMenuActivator]="rootMenu" id="activator">Open</button>

    <ng-template #rootMenu>
      <daff-menu>
        <button daff-menu-item [daffMenuActivator]="subA" trigger="click" id="parentA">A</button>
        <button daff-menu-item [daffMenuActivator]="subB" trigger="click" id="parentB">B</button>
      </daff-menu>
    </ng-template>

    <ng-template #subA>
      <daff-menu>
        <button daff-menu-item id="a-leaf">A leaf</button>
      </daff-menu>
    </ng-template>

    <ng-template #subB>
      <daff-menu>
        <button daff-menu-item id="b-leaf">B leaf</button>
      </daff-menu>
    </ng-template>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class SiblingSubmenuWrapperComponent {}

describe('@daffodil/design/menu | Nested menu | Sibling submenus', () => {
  let fixture: ComponentFixture<SiblingSubmenuWrapperComponent>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  const menus = () => overlayContainerElement.querySelectorAll('.daff-menu');
  const panes = () => overlayContainerElement.querySelectorAll('.cdk-overlay-pane');
  const click = (selector: string) => {
    (<HTMLElement>overlayContainerElement.querySelector(selector)).click();
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };
  const openRoot = () => {
    fixture.debugElement.query(By.css('#activator')).nativeElement.click();
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SiblingSubmenuWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(SiblingSubmenuWrapperComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should close the open submenu when a sibling submenu opens', fakeAsync(() => {
    openRoot();
    click('#parentA');
    expect(menus().length).toBe(2);

    click('#parentB');

    expect(menus().length).toBe(2);
    expect(overlayContainerElement.querySelector('#a-leaf')).toBeNull();
    expect(overlayContainerElement.querySelector('#b-leaf')).not.toBeNull();
  }));

  it('should remove the replaced submenu from the DOM when the menu is dismissed', fakeAsync(() => {
    openRoot();
    click('#parentA');
    click('#parentB');

    (<HTMLElement>overlayContainerElement.querySelector('.cdk-overlay-backdrop')).click();
    fixture.detectChanges();
    flush();

    expect(menus().length).toBe(0);
    expect(panes().length).toBe(0);
  }));
});

@Component({
  template: `
    <button [daffMenuActivator]="rootMenu" id="activator">Open</button>

    <ng-template #rootMenu>
      <daff-menu>
        <button daff-menu-item [daffMenuActivator]="subMenu" id="parent">Parent</button>
        <button daff-menu-item id="sibling">Sibling</button>
      </daff-menu>
    </ng-template>

    <ng-template #subMenu>
      <daff-menu>
        <button daff-menu-item id="sub-leaf">Sub leaf</button>
      </daff-menu>
    </ng-template>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class HoverSubmenuWrapperComponent {}

describe('@daffodil/design/menu | Nested menu | Hover trigger', () => {
  let fixture: ComponentFixture<HoverSubmenuWrapperComponent>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  const menus = () => overlayContainerElement.querySelectorAll('.daff-menu');
  const parent = () => <HTMLElement>overlayContainerElement.querySelector('#parent');
  const flyoutPane = () => <HTMLElement>menus()[1].closest('.cdk-overlay-pane');
  const pointer = (element: HTMLElement, event: 'mouseenter' | 'mouseleave') => {
    element.dispatchEvent(new MouseEvent(event));
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };
  const openRoot = () => {
    fixture.debugElement.query(By.css('#activator')).nativeElement.click();
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  };
  const hoverParent = () => pointer(parent(), 'mouseenter');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HoverSubmenuWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(HoverSubmenuWrapperComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open the submenu as soon as the pointer reaches the parent item', fakeAsync(() => {
    openRoot();
    hoverParent();

    expect(menus().length).toBe(2);
  }));

  it('should leave focus in the menu the pointer came from', fakeAsync(() => {
    openRoot();
    hoverParent();

    expect(document.activeElement).toBe(parent());
  }));

  it('should keep the submenu open once the pointer leaves it', fakeAsync(() => {
    openRoot();
    hoverParent();

    pointer(flyoutPane(), 'mouseleave');
    pointer(parent(), 'mouseleave');

    expect(menus().length).toBe(2);
  }));

  it('should close the submenu once the pointer reaches a sibling item', fakeAsync(() => {
    openRoot();
    hoverParent();

    pointer(<HTMLElement>overlayContainerElement.querySelector('#sibling'), 'mouseenter');

    expect(menus().length).toBe(1);
  }));
});

describe('@daffodil/design/menu | Nested menu | Dismissal', () => {
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  const menus = () => overlayContainerElement.querySelectorAll('.daff-menu');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NestedMenuWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should close every open menu once focus leaves them', async () => {
    const settle = () => new Promise<void>((resolve) => setTimeout(resolve));
    const fixture = TestBed.createComponent(NestedMenuWrapperComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('#activator')).nativeElement.click();
    fixture.detectChanges();
    await settle();
    fixture.detectChanges();
    expect(menus().length).toBe(1);

    const outside = document.createElement('button');
    document.body.appendChild(outside);

    outside.focus();
    fixture.detectChanges();
    await settle();
    fixture.detectChanges();

    expect(menus().length).toBe(0);
    outside.remove();
  });
});
