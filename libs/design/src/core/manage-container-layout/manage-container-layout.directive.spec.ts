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

import { DaffManageContainerLayoutDirective } from './manage-container-layout.directive';

@Component({
  template: `
		<div daffManageContainerLayout></div>`,
  standalone: false,
})

class WrapperComponent {}

describe('@daffodil/design | DaffManageContainerLayoutDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffManageContainerLayoutDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffManageContainerLayoutDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffManageContainerLayout]'));
    directive = de.injector.get(DaffManageContainerLayoutDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-manage-container-layout" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-manage-container-layout': true,
    }));
  });
});
