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

import { DaffListComponent } from '@daffodil/design/list';

@Component({
  template: `
    <daff-list></daff-list>
  `,
  imports: [
    DaffListComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/list | DaffListComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffListComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-list'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-list" to the host element', () => {
    expect(de.nativeElement.classList.contains('daff-list')).toBeTruthy();
  });

  it('should have a role of list', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('list');
  });
});
