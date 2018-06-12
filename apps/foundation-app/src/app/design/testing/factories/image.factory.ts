import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Image } from '../../interfaces/image';

@Injectable()
export class ImageFactory {
  
  create() : Image {
    return {...new MockImage()};
  }
}

export class MockImage implements Image {
    label = faker.image.nature();
    url = faker.image.imageUrl();
};
