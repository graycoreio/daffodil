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
import { BehaviorSubject } from 'rxjs';

import { DaffMenuComponent } from './menu.component';
import { DaffMenuModule } from './menu.module';
import { DaffMenuService } from './menu.service';
import { provideTestMenuService } from './testing/dummy-service';

@Component({ template: `
  <daff-menu></daff-menu>
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

  it('should have a tabindex of 0', () => {
    expect(de.nativeElement.tabIndex).toEqual(0);
  });

  it('should call close on the service when the escape key is pressed', () => {
    const menuService = TestBed.inject(DaffMenuService);
    expect((<BehaviorSubject<boolean>>menuService.open$).value).toEqual(true);
    const event = new KeyboardEvent('keyup',{
      key: 'Escape',
    });

    de.nativeElement.dispatchEvent(event);
    fixture.detectChanges();
    expect((<BehaviorSubject<boolean>>menuService.open$).value).toEqual(false);
  });
});
