import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffFocusStackService } from './stack.service';

@Component({
  template: `
    <button id="one">one</button>
    <button id="two">two</button>
    <button id="three">three</button>
    <button id="four">four</button>
  `,
  standalone: false,
})
export class FakeComponent {}

describe('@daffodil/design | DaffFocusStackService', () => {
  let stack: DaffFocusStackService;
  let wrapper: ComponentFixture<FakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffFocusStackService,
      ],
      declarations: [
        FakeComponent,
      ],
    });

    wrapper = TestBed.createComponent(FakeComponent);
    stack = TestBed.inject(DaffFocusStackService);
  });


  it('should be created', () => {
    expect(stack).toBeTruthy();
    expect(stack.length()).toEqual(0);
  });

  describe('focus', () => {
    it('should not error in the event there is nothing in the stack', () => {
      expect(() => stack.focus()).not.toThrowError();
    });

    it('it should focus on the item at the top of the stack ', () => {
      const one = wrapper.debugElement.query(By.css('#one')).nativeElement;
      const two = wrapper.debugElement.query(By.css('#two')).nativeElement;
      expect(two).toBeInstanceOf(HTMLElement);

      stack.push(one);
      stack.push(two);
      stack.focus();

      expect(document.activeElement).toEqual(two);
    });
  });

  describe('pop and push', () => {
    it('it should add an item at the top of the stack', () => {
      const one = wrapper.debugElement.query(By.css('#one')).nativeElement;
      const two = wrapper.debugElement.query(By.css('#two')).nativeElement;
      expect(two).toBeInstanceOf(HTMLElement);

      stack.push(one);
      stack.push(two);

      expect(stack.length()).toEqual(2);
      expect(stack.pop()).toEqual(two);
    });
  });

  describe('pop', () => {
    it('should pop an element off the stack and return it', () => {
      const one = wrapper.debugElement.query(By.css('#one')).nativeElement;

      stack.push(one);
      expect(stack.length()).toEqual(1);
      expect(stack.pop()).toEqual(one);
      expect(stack.length()).toEqual(0);
    });

    it('should return the activeElement (in chrome, the body) if you pop an empty stack', () => {
      expect(stack.pop()).toEqual(<HTMLElement>document.activeElement);
    });

    it('should focus the popped element if called with no arguments', () => {
      const one = wrapper.debugElement.query(By.css('#one')).nativeElement;

      stack.push(one);
      expect(one).not.toEqual(document.activeElement);
      stack.pop();
      expect(one).toEqual(document.activeElement);
    });

    it('should not focus the popped element if pop is called with false', () => {
      const one = wrapper.debugElement.query(By.css('#one')).nativeElement;

      stack.push(one);
      expect(one).not.toEqual(document.activeElement);
      stack.pop(false);
      expect(one).not.toEqual(document.activeElement);
    });
  });
});
