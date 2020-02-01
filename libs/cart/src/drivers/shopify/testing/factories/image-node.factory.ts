import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { ImageNode } from '../../models/image-node';

export class MockImageNode implements ImageNode {
  id = faker.random.uuid();
  altText = faker.random.words(faker.random.number(5));
  originalSrc = faker.random.image();
}

@Injectable({
  providedIn: 'root'
})
export class ImageNodeFactory extends DaffModelFactory<ImageNode> {
  constructor() {
    super(MockImageNode);
  }
}
