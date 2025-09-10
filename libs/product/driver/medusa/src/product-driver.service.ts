import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DAFF_MEDUSA_CONFIG,
  DaffMedusaConfig,
} from '@daffodil/driver/medusa';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { transformMedusaProduct } from './transform';
import { MedusaProduct } from './types/medusa-product';

/**
 * Angular service that implements DaffProductServiceInterface for Medusa.
 * Provides methods to fetch product data from Medusa API.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductMedusaService implements DaffProductServiceInterface {
  /** HTTP headers used for Medusa API requests */
  private readonly headers: HttpHeaders;

  /**
   * @param client - Angular HTTP client for API requests
   * @param config - Medusa configuration injected via DAFF_MEDUSA_CONFIG token
   */
  constructor(
    private client: HttpClient,
    @Inject(DAFF_MEDUSA_CONFIG) private config: DaffMedusaConfig,
  ) {
    this.headers = new HttpHeaders({
      'x-publishable-api-key': this.config.publishableApiKey,
    });
  }

  /**
   * Fetches all products from the Medusa API.
   * @returns Observable of DaffProduct array
   */
  getAll(): Observable<DaffProduct[]> {
    return this.client.get<{ products: MedusaProduct[] }>(
      this.config.api_url + '/products',
      { headers: this.headers },
    ).pipe(
      map((response): DaffProduct[] => response.products.map(transformMedusaProduct)),
    );
  }

  /**
   * Gets a single product by ID.
   * @param productId - The product ID to fetch
   * @returns Observable of DaffProductDriverResponse
   * @throws Error - Method not implemented
   */
  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }

  /**
   * Gets a product by its URL.
   * @param url - The product URL to fetch
   * @returns Observable of DaffProductDriverResponse
   * @throws Error - Method not implemented
   */
  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }
}
