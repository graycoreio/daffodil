import { TestBed } from '@angular/core/testing';

import { ImageNode } from '../../models/image-node';
import { ImageNodeFactory } from './image-node.factory';

describe('Driver | Shopify | Cart | Testing | Factories | ImageNodeFactory', () => {

  let imageNodeFactory: ImageNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageNodeFactory]
    });

    imageNodeFactory = TestBed.get(ImageNodeFactory);
  });

  it('should be created', () => {
    expect(imageNodeFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: ImageNode;

    beforeEach(() => {
      result = imageNodeFactory.create();
    });

    it('should return a ImageNode with all required fields defined', () => {
      expect(result.altText).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.originalSrc).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: ImageNode[];

    it('should create as many cart shipping rates as desired', () => {
      result = imageNodeFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = imageNodeFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
