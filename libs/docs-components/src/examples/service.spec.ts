import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffDocsComponentExamples } from './service';
import { provideDaffDocsExampleComponents } from './token';

@Component({
  selector: 'daff-test',
})
class TestComponent {}

describe('@daffodil/documentation | DaffDocsComponentExamples', () => {
  let service: DaffDocsComponentExamples;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffDocsComponentExamples,
        provideDaffDocsExampleComponents(TestComponent),
      ],
    });

    service = TestBed.inject(DaffDocsComponentExamples);
  });

  it('should set the provided components into the returned map by selector', () => {
    expect(service.examples.get('daff-test')).toEqual(TestComponent);
  });
});
