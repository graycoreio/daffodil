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

import { DaffListModule } from '../../list/list.module';
import { DaffMenuComponent } from '../menu.component';
import { DaffMenuModule } from '../menu.module';

@Component({ template: `
  <daff-menu>
    <daff-nav-list>
      <a id="focused" href="/test" daff-list-item>Test</a>
      <a id="not-focused" href="/test" daff-list-item>Test 2</a>
    </daff-nav-list>
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
        DaffListModule,
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
