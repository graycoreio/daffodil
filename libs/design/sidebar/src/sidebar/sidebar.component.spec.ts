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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarComponent } from './sidebar.component';

describe('@daffodil/design/sidebar | DaffSidebarComponent', () => {
  let component: DaffSidebarComponent;
  let fixture: ComponentFixture<DaffSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffSidebarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('user interactions', () => {
    it('should emit `escapedPressed` when the `ESC` key is pressed', () => {
      spyOn(component.escapePressed, 'emit');

      fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Escape',
      }));

      fixture.detectChanges();

      expect(component.escapePressed.emit).toHaveBeenCalledWith();
    });

    it('should not emit `escapedPressed` if the event is not triggered ON the `daff-sidebar`', () => {
      spyOn(component.escapePressed, 'emit');

      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Escape',
      }));

      fixture.detectChanges();

      expect(component.escapePressed.emit).not.toHaveBeenCalledWith();
    });
  });
});

@Component({
  template: `
    <div class="host-element">
      <daff-sidebar [mode]="mode" [side]="side"></daff-sidebar>
    </div>
  `,
  imports: [
    DaffSidebarComponent,
  ],
})
class DefaultsWrapperComponent {
  side = 'left';
  mode = 'side';
}

describe('DaffSidebarComponent | Defaults', () => {
  let wrapper: DefaultsWrapperComponent;
  let fixture: ComponentFixture<DefaultsWrapperComponent>;
  let component: DaffSidebarComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DefaultsWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultsWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-sidebar'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-sidebar" to the host element', () => {
    expect(de.classes['daff-sidebar']).toBeTrue();
  });

  it('should set the default side to left', () => {
    expect(de.classes['left']).toBeTrue();
  });

  it('should set the default mode to side', () => {
    expect(de.classes['side']).toBeTrue();
  });

  it('should set the default width to 240px', () => {
    expect(component.width).toEqual(240);
  });
});

@Component({
  template: `
    <div class="host-element">
      <daff-sidebar (escapePressed)="pressed()" [mode]="mode" [side]="side" [open]="open"></daff-sidebar>
    </div>
  `,
  imports: [
    DaffSidebarComponent,
  ],
})
class UsageWrapperComponent {
  open = false;
  side = 'left';
  mode = 'side';

  escapePressedCount = 0;

  pressed(): void{
    this.escapePressedCount++;
  }
}

describe('DaffSidebarComponent | Usage', () => {
  let wrapper: UsageWrapperComponent;
  let fixture: ComponentFixture<UsageWrapperComponent>;
  let component: DaffSidebarComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        UsageWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-sidebar'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('setting the side', () => {
    describe('when side="left"', () => {
      it('should add a class of "left" to the host element', () => {
        wrapper.side = 'left';
        fixture.detectChanges();

        expect(de.classes['left']).toBeTrue();
      });
    });

    describe('when side="right"', () => {
      it('should add a class of "right" to the host element', () => {
        wrapper.side = 'right';
        fixture.detectChanges();

        expect(de.classes['right']).toBeTrue();
      });
    });
  });

  it('should be able to bind to the Output `escapePressed`', () => {
    component.escapePressed.emit();

    fixture.detectChanges();

    expect(wrapper.escapePressedCount).toEqual(1);
  });

  it('should be able to bind to the input `mode`', () => {
    expect(component.mode).toEqual('side');
  });

  it('should be able to bind to the input `side`', () => {
    expect(component.side).toEqual('left');
  });

  it('should be able to bind to the input `open`', () => {
    expect(component.open).toEqual(false);
  });
});

