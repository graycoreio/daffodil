import { TestBed } from '@angular/core/testing';
import { ImageFactory } from './image.factory';
import { Image } from '../../interfaces/image';

describe('ImageFactory', () => {
  
  let imageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageFactory]
    });

    imageFactory = TestBed.get(ImageFactory);
  });

  it('should be created', () => {
    expect(imageFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:Image;

    beforeEach(() => {
      result = imageFactory.create();
    });

    it('should return an Image', () => {
      expect(result).toBeDefined();
    });

    describe('Cart object', () => {

      it('should have a label', () => {
        expect(result.label).not.toBeNull();
      });
      
      it('should have a url', () => {
        expect(result.url).not.toBeNull();
      });
    });
  });
});
