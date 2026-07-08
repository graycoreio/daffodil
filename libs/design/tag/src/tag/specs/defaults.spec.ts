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

import { DaffTagComponent } from '@daffodil/design/tag';

@Component({
  template: `
    <daff-tag>Tag</daff-tag>
  `,
  imports: [
    DaffTagComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/tag | DaffTagComponent | Defaults', () => {
  let component: DaffTagComponent;
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
    de = fixture.debugElement.query(By.css('daff-tag'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have daff-tag class', () => {
    expect(de.nativeElement.classList.contains('daff-tag')).toBe(true);
  });

  it('should set dismissible to false by default', () => {
    expect(component.dismissible).toBeFalse();
  });

  it('should set disabled to false by default', () => {
    expect(component.disabled).toBeFalse();
  });

  it('should set the default size to `md` and add the `.daff-md` class', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-md': true,
    }));
  });
});
