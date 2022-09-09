import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarComponent } from './sidebar.component';

describe('DaffSidebarComponent', () => {
  let component: DaffSidebarComponent;
  let fixture: ComponentFixture<DaffSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [
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

@Component({ template: `
  <div class="host-element">
    <daff-sidebar (escapePressed)="pressed()" [mode]="mode" [side]="side" [open]="open"></daff-sidebar>
  </div>
` })
class WrapperComponent {
  escapePressedCount = 0;

  open = false;

  side = 'left';

  mode = 'side';

  pressed(): void{
    this.escapePressedCount++;
  }
}

describe('DaffSidebarComponent | usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [
        WrapperComponent,
        DaffSidebarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
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

  it('should have a width of 240px by default', () => {
    expect(component.width).toEqual(240);
  });
});
