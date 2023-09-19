// stack is empty array by default
// when there is nothing in stack and focus is called, focus should doing nothing
// when something is in stack and focus is called, element is focused
// when push is called, it should add element to stack
// when pop is called, it should remove element from stack and focus the element
// if stack is empty and pop is called, document should become focused

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffFocusStackService } from './stack.service';

@Component({})
export class FakeComponent {}

describe('DaffFocusStackService', () => {
  let service: DaffFocusStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffFocusStackService,
      ],
    });

    service = TestBed.inject(DaffFocusStackService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
