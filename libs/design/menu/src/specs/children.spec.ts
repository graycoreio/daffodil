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
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `<daff-menu></daff-menu>`,
  imports: [
    DaffMenuComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffMenuComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
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

  it('should focus itself when there are no children', () => {
    expect(document.activeElement === de.nativeElement).toEqual(true);
  });
});
