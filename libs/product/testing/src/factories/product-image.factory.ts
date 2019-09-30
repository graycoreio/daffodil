import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffProductImage } from '@daffodil/product';

import { DaffModelFactory } from '@daffodil/core/testing';

const productImageUrlsList: string[] = [
  '/assets/products/0.jpg',
  '/assets/products/1.jpg',
  '/assets/products/2.jpg',
  '/assets/products/3.jpg',
  '/assets/products/4.jpg',
  '/assets/products/5.jpg',
  '/assets/products/6.jpg',
  '/assets/products/7.jpg',
  '/assets/products/8.jpg',
  '/assets/products/9.jpg',
  '/assets/products/10.jpg',
  '/assets/products/11.jpg',
  '/assets/products/12.jpg',
  '/assets/products/13.jpg',
  '/assets/products/14.jpg',
  '/assets/products/15.jpg',
  '/assets/products/16.jpg',
  '/assets/products/17.jpg',
  '/assets/products/18.jpg',
  '/assets/products/19.jpg',
  '/assets/products/20.jpg',
  '/assets/products/21.jpg',
  '/assets/products/22.jpg',
  '/assets/products/23.jpg',
  '/assets/products/24.jpg',
  '/assets/products/25.jpg',
  '/assets/products/26.jpg',
  '/assets/products/27.jpg',
  '/assets/products/28.jpg',
  '/assets/products/29.jpg',
  '/assets/products/30.jpg',
  '/assets/products/31.jpg',
  '/assets/products/32.jpg',
  '/assets/products/33.jpg',
  '/assets/products/34.jpg',
  '/assets/products/35.jpg',
  '/assets/products/36.jpg',
  '/assets/products/37.jpg',
  '/assets/products/38.jpg',
  '/assets/products/39.jpg',
  '/assets/products/40.jpg',
  '/assets/products/41.jpg',
  '/assets/products/42.jpg',
  '/assets/products/43.jpg',
  '/assets/products/44.jpg',
  '/assets/products/45.jpg',
  '/assets/products/46.jpg',
  '/assets/products/47.jpg',
  '/assets/products/48.jpg',
  '/assets/products/49.jpg',
  '/assets/products/50.jpg',
  '/assets/products/51.jpg',
  '/assets/products/52.jpg',
  '/assets/products/53.jpg',
  '/assets/products/54.jpg',
  '/assets/products/55.jpg',
  '/assets/products/56.jpg',
  '/assets/products/57.jpg',
  '/assets/products/58.jpg',
  '/assets/products/59.jpg',
  '/assets/products/60.jpg',
  '/assets/products/61.jpg',
  '/assets/products/62.jpg',
  '/assets/products/63.jpg',
  '/assets/products/64.jpg',
  '/assets/products/65.jpg',
  '/assets/products/66.jpg',
  '/assets/products/67.jpg',
  '/assets/products/68.jpg',
  '/assets/products/69.jpg',
  '/assets/products/70.jpg',
  '/assets/products/71.jpg',
  '/assets/products/72.jpg',
  '/assets/products/73.jpg',
  '/assets/products/74.jpg',
  '/assets/products/75.jpg',
  '/assets/products/76.jpg',
  '/assets/products/77.jpg',
  '/assets/products/78.jpg',
  '/assets/products/79.jpg',
  '/assets/products/80.jpg',
  '/assets/products/81.jpg',
  '/assets/products/82.jpg',
  '/assets/products/83.jpg',
  '/assets/products/84.jpg',
  '/assets/products/85.jpg',
  '/assets/products/86.jpg',
  '/assets/products/87.jpg',
  '/assets/products/88.jpg',
  '/assets/products/89.jpg',
  '/assets/products/90.jpg',
  '/assets/products/91.jpg',
  '/assets/products/92.jpg',
  '/assets/products/93.jpg',
  '/assets/products/94.jpg',
  '/assets/products/95.jpg',
  '/assets/products/96.jpg',
  '/assets/products/97.jpg',
  '/assets/products/98.jpg',
  '/assets/products/99.jpg',
  '/assets/products/100.jpg'
];

/**
 * Mocked DaffProductImage object.
 */
export class MockProductImage implements DaffProductImage {
  id = faker.random.number(10000).toString();
  url = productImageUrlsList[faker.random.number(productImageUrlsList.length-1)]
  label = faker.lorem.sentence();
}

/**
 * A factory for creating DaffProductImage.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffProductImageFactory extends DaffModelFactory<DaffProductImage> {
  constructor(){
    super(MockProductImage);
  }
}
