import {
  Component,
  DebugElement,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffRovingTabIndexBoundaryDirective } from '@daffodil/design';

import { DaffRovingTabIndexService } from './roving-tab-index-group.service';
import { DaffRovingTabIndexDirective } from './roving-tab-index.directive';

@Component({
  template: `
		<div [rti]="rtiValue()"></div>
	`,
  imports: [
    DaffRovingTabIndexDirective,
  ],
})
class WrapperComponent {
  rtiValue = signal<string>(undefined);
}

describe('@daffodil/design | DaffRovingTabIndexDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let directive: DaffRovingTabIndexDirective;
  let serviceSpy: jasmine.SpyObj<DaffRovingTabIndexService>;
  let groupSpy: WritableSignal<string>;

  beforeEach(() => {
    groupSpy = signal('');
    serviceSpy = jasmine.createSpyObj('DaffRovingTabIndexService', ['leave', 'next', 'previous'], { group: groupSpy });

    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        {
          provide: DaffRovingTabIndexService,
          useValue: serviceSpy,
        },
      ],
    });

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.directive(DaffRovingTabIndexDirective));
    directive = de.injector.get(DaffRovingTabIndexDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should accept rti as an input', () => {
    wrapper.rtiValue.set('rtiTest');
    fixture.detectChanges();
    expect(directive.rti()).toEqual(wrapper.rtiValue());
  });

  it('should allow group to be overridden by rti', () => {
    wrapper.rtiValue.set('rtiTest');
    fixture.detectChanges();
    expect(directive.group()).toEqual(wrapper.rtiValue());
  });

  it('should default group to empty string', () => {
    expect(directive.group()).toEqual('');
  });

  describe('when the escape key is pressed when inside a group', () => {
    beforeEach(() => {
      groupSpy.set('test');
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      fixture.detectChanges();
    });

    it('should leave the group', () => {
      expect(serviceSpy.leave).toHaveBeenCalledWith();
    });
  });

  describe('when the up arrow is pressed when inside a group', () => {
    beforeEach(() => {
      groupSpy.set('test');
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
      fixture.detectChanges();
    });

    it('should navigate to the previous target', () => {
      expect(serviceSpy.previous).toHaveBeenCalledWith();
    });
  });

  describe('when the down arrow is pressed when inside a group', () => {
    beforeEach(() => {
      groupSpy.set('test');
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      fixture.detectChanges();
    });

    it('should navigate to the next target', () => {
      expect(serviceSpy.next).toHaveBeenCalledWith();
    });
  });

  describe('when the up arrow is pressed when not inside a group', () => {
    beforeEach(() => {
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
      fixture.detectChanges();
    });

    it('should not navigate to the previous target', () => {
      expect(serviceSpy.previous).not.toHaveBeenCalled();
    });
  });

  describe('when the down arrow is pressed when not inside a group', () => {
    beforeEach(() => {
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      fixture.detectChanges();
    });

    it('should not navigate to the next target', () => {
      expect(serviceSpy.next).not.toHaveBeenCalled();
    });
  });

  describe('when the tab key is pressed when inside a group', () => {
    beforeEach(() => {
      groupSpy.set('test');
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
      fixture.detectChanges();
    });

    it('should navigate to the next target', () => {
      expect(serviceSpy.next).toHaveBeenCalledWith();
    });
  });

  describe('when the tab plus shift key is pressed when inside a group', () => {
    beforeEach(() => {
      groupSpy.set('test');
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true }));
      fixture.detectChanges();
    });

    it('should navigate to the previous target', () => {
      expect(serviceSpy.previous).toHaveBeenCalledWith();
    });
  });

  describe('when the tab key is pressed when not inside a group', () => {
    beforeEach(() => {
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
      fixture.detectChanges();
    });

    it('should not navigate to the previous target', () => {
      expect(serviceSpy.previous).not.toHaveBeenCalled();
    });
  });

  describe('when the tab plus shift key is pressed when not inside a group', () => {
    beforeEach(() => {
      (<HTMLElement>de.nativeElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true }));
      fixture.detectChanges();
    });

    it('should not navigate to the next target', () => {
      expect(serviceSpy.next).not.toHaveBeenCalled();
    });
  });
});

@Component({
  template: `
		<div rtiBoundary="group">
			<div data-sut [rti]="rtiValue()"></div>
		</div>
	`,
  imports: [
    DaffRovingTabIndexDirective,
    DaffRovingTabIndexBoundaryDirective,
  ],
})
class WrapperInGroupComponent {
  rtiValue = signal<string>(undefined);
}

describe('@daffodil/design | DaffRovingTabIndexDirective | In Group', () => {
  let fixture: ComponentFixture<WrapperInGroupComponent>;
  let wrapper: WrapperInGroupComponent;
  let directive: DaffRovingTabIndexDirective;
  let serviceSpy: jasmine.SpyObj<DaffRovingTabIndexService>;
  let groupSpy: WritableSignal<string>;

  beforeEach(() => {
    groupSpy = signal('');
    serviceSpy = jasmine.createSpyObj('DaffRovingTabIndexService', ['leave', 'next', 'previous'], { group: groupSpy });

    TestBed.configureTestingModule({
      imports: [
        WrapperInGroupComponent,
      ],
      providers: [
        {
          provide: DaffRovingTabIndexService,
          useValue: serviceSpy,
        },
      ],
    });

    fixture = TestBed.createComponent(WrapperInGroupComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.css('[data-sut]')).injector.get(DaffRovingTabIndexDirective);
  });

  it('should default the group to the parent', () => {
    fixture.detectChanges();
    expect(directive.group()).toEqual('group');
  });

  it('should allow group to be overridden by rti', () => {
    wrapper.rtiValue.set('rtiTest');
    fixture.detectChanges();
    expect(directive.group()).toEqual(wrapper.rtiValue());
  });

  it('should set tabindex to -1 when the group does not match', () => {
    groupSpy.set('not group');
    fixture.detectChanges();
    expect(directive.tabindex()).toEqual(-1);
  });

  it('should set tabindex to 0 when the group matches', () => {
    groupSpy.set('group');
    fixture.detectChanges();
    expect(directive.tabindex()).toEqual(0);
  });
});

@Component({
  template: `
		<a></a>
	`,
  imports: [
    DaffRovingTabIndexDirective,
  ],
})
class WrapperAnchorComponent {
  rtiValue: string;
}

describe('@daffodil/design | DaffRovingTabIndexDirective | Anchor', () => {
  let fixture: ComponentFixture<WrapperAnchorComponent>;
  let wrapper: WrapperAnchorComponent;
  let directive: DaffRovingTabIndexDirective;
  let serviceSpy: jasmine.SpyObj<DaffRovingTabIndexService>;
  let groupSpy: WritableSignal<string>;

  beforeEach(() => {
    groupSpy = signal('');
    serviceSpy = jasmine.createSpyObj('DaffRovingTabIndexService', ['leave', 'next', 'previous'], { group: groupSpy });

    TestBed.configureTestingModule({
      imports: [
        WrapperAnchorComponent,
      ],
      providers: [
        {
          provide: DaffRovingTabIndexService,
          useValue: serviceSpy,
        },
      ],
    });

    fixture = TestBed.createComponent(WrapperAnchorComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(DaffRovingTabIndexDirective)).injector.get(DaffRovingTabIndexDirective);
  });

  it('should automatically apply to anchors', () => {
    expect(directive).toBeTruthy();
  });
});

@Component({
  template: `
		<button></button>
	`,
  imports: [
    DaffRovingTabIndexDirective,
  ],
})
class WrapperButtonComponent {
  rtiValue: string;
}

describe('@daffodil/design | DaffRovingTabIndexDirective | Button', () => {
  let fixture: ComponentFixture<WrapperButtonComponent>;
  let wrapper: WrapperButtonComponent;
  let directive: DaffRovingTabIndexDirective;
  let serviceSpy: jasmine.SpyObj<DaffRovingTabIndexService>;
  let groupSpy: WritableSignal<string>;

  beforeEach(() => {
    groupSpy = signal('');
    serviceSpy = jasmine.createSpyObj('DaffRovingTabIndexService', ['leave', 'next', 'previous'], { group: groupSpy });

    TestBed.configureTestingModule({
      imports: [
        WrapperButtonComponent,
      ],
      providers: [
        {
          provide: DaffRovingTabIndexService,
          useValue: serviceSpy,
        },
      ],
    });

    fixture = TestBed.createComponent(WrapperButtonComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(DaffRovingTabIndexDirective)).injector.get(DaffRovingTabIndexDirective);
  });

  it('should automatically apply to buttons', () => {
    expect(directive).toBeTruthy();
  });
});
