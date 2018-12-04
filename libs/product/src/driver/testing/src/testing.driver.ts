import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '../../src/service-interfaces/driver.interface';
import { DaffTestingProductService } from './product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingDriver implements DaffDriverInterface {
  constructor(
    public productService: DaffTestingProductService
  ){}
}