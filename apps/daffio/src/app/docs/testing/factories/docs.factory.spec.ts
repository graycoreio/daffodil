import { TestBed } from '@angular/core/testing';

import { DaffioDocsFactory } from './docs.factory';

describe('DaffioDocsFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const factory: DaffioDocsFactory = TestBed.inject(DaffioDocsFactory);
    expect(factory).toBeTruthy();
  });

  it('should be able to create a new doc', () => {
    const factory: DaffioDocsFactory = TestBed.inject(DaffioDocsFactory);
    const doc = factory.create();

    expect(Object.keys(doc)).toContain('id');
    expect(Object.keys(doc)).toContain('title');
    expect(Object.keys(doc)).toContain('contents');
    expect(Object.keys(doc.tableOfContents[0])).toContain('content');
    expect(Object.keys(doc.tableOfContents[0])).toContain('lvl');
    expect(Object.keys(doc.tableOfContents[0])).toContain('slug');
  });
});
