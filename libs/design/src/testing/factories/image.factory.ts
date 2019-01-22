import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { Image } from '../../interfaces/image';

export class MockImage implements Image {
    label = faker.image.nature();
    url = faker.image.imageUrl();
};

@Injectable()
export class ImageFactory {
  
  create() : Image {
    return {...new MockImage()};
  }
}
