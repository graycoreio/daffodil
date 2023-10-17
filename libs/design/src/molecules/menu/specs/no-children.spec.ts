import { OverlayModule } from '@angular/cdk/overlay';
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

import { DaffMenuComponent } from '../menu/menu.component';
import { DaffMenuModule } from '../menu.module';

@Component({ template: `
  <daff-menu>
    <a href="/test" daff-menu-item id="focused">Test</a>
    <button daff-menu-item id="not-focused">Test 2</button>
  </daff-menu>
` })
class WrapperComponent {}

describe('DaffMenuComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffMenuComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffMenuModule,
      ],
      declarations: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-menu'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should focus the first focusable child', () => {
    expect(
      document.activeElement === de.query(By.css('#focused')).nativeElement,
    ).toEqual(true);
  });
});
