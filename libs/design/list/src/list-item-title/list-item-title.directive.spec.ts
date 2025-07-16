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

import { DaffListItemTitleDirective } from './list-item-title.directive';

@Component({
  template: `<div daffListItemTitle>Title</div>`,
  imports: [
    DaffListItemTitleDirective,
  ],
})
class WrapperComponent {}

describe('DaffListItemTitleDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffListItemTitleDirective;

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
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffListItemTitle]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-list-item__title" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-list-item__title': true,
    }));
  });
});
