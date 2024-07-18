import { TestBed } from '@angular/core/testing';

import { DaffDocsFactory } from './docs.factory';

describe('@daffodil/documentation | DaffDocsFactory', () => {
  let factory: DaffDocsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    factory = TestBed.inject(DaffDocsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  it('should be able to create a new doc', () => {
    const doc = factory.create();

    expect(Object.keys(doc)).toContain('id');
    expect(Object.keys(doc)).toContain('title');
    expect(Object.keys(doc)).toContain('contents');
    expect(Object.keys(doc.tableOfContents.json[0])).toContain('content');
    expect(Object.keys(doc.tableOfContents.json[0])).toContain('lvl');
    expect(Object.keys(doc.tableOfContents.json[0])).toContain('slug');
  });
});
