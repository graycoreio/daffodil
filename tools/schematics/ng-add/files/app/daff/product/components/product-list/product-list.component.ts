import {
  AsyncPipe,
  CurrencyPipe,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import {
  ProductListStateService,
  ProductListState,
} from './state/product-list.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe, NgOptimizedImage, RouterLink],
  providers: [ProductListStateService],
  template: `
    <div class="merchandise-section">
      <div class="section-header">
        <h1>Merchandise</h1>
      </div>

      @if (state$ | async; as state) {
        @if (state.error) {
          <div class="error-container">
            <div class="error-icon">⚠️</div>
            <h3>Unable to load products</h3>
            <p>{{ state.error.message || 'Something went wrong while fetching products.' }}</p>
            <p>Try switching to a different driver in the debug bar below, then click Retry.</p>
            <button class="retry-button" (click)="retry()">Retry</button>
          </div>
        } @else if (state.loading) {
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        } @else {
          <div class="product-grid">
            @for (item of state.data; track item.id; let i = $index) {
              <a [routerLink]="item.url" [queryParams]="{key: 'test'}" class="product-card">
                <div class="product-image-container">
                  <div style="position: relative;
    aspect-ratio: 1;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center"
    >
    <img
                    class="product-image"
                    [ngSrc]="item.thumbnail.url"
                    [alt]="item.thumbnail.label"
                    [priority]="i < 4"
                    [loading]="i < 4 ? undefined : 'lazy'"
                    fill
                  />
    </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{{ item.name }}</h3>
                  <span class="product-category">{{ item.brand }}</span>
                  <div class="price-container">
                    <span class="current-price">{{ (item.price || 0) | currency }}</span>
                  </div>
                </div>
              </a>
            }
          </div>
        }
      }
    </div>
  `,
  styles: [`
    :host {
      --gray-100: #f5f5f5;
      --gray-200: #e5e5e5;
      --gray-300: #d4d4d4;
      --gray-600: #525252;
      --gray-700: #404040;
      --gray-900: #171717;
      --red-600: #dc2626;
      --blue-500: #1f66ff;
      --blue-600: #1557e6;
      --purple-500: #6a57ff;
      --purple-600: #5845e6;
      --teal-600: #00835f;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .merchandise-section {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 1.875rem;
      color: var(--gray-900);
      font-weight: 600;
      margin: 0;
      letter-spacing: -0.025em;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }

    .product-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s ease;
      border: 1px solid var(--gray-200);
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .product-card:hover {
      transform: translateY(-2px);
    }

    .product-image-container {
      aspect-ratio: 1;
      position: relative;
      background: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .product-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .product-info {
      padding: 1rem;
      background: white;
    }

    .product-name {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-900);
      margin: 0 0 0.25rem 0;
      line-height: 1.4;
    }

    .product-category {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: block;
      margin-bottom: 0.5rem;
    }

    .price-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .current-price {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    .original-price {
      font-size: 0.75rem;
      color: var(--gray-600);
      text-decoration: line-through;
    }

    .discount {
      font-size: 0.75rem;
      color: var(--red-600);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }

    @media screen and (max-width: 768px) {
      .merchandise-section {
        padding: 1rem;
      }

      h1 {
        font-size: 1.5rem;
      }

      .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
      }

      .section-header {
        margin-bottom: 1rem;
      }
    }

    .error-container {
      text-align: center;
      padding: 3rem 1rem;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 8px;
      margin: 2rem 0;
    }

    .error-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .error-container h3 {
      color: var(--red-600);
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
    }

    .error-container p {
      color: var(--gray-700);
      margin: 0 0 1.5rem 0;
    }

    .retry-button {
      background: var(--red-600);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .retry-button:hover {
      background: #b91c1c;
    }

    .loading-container {
      text-align: center;
      padding: 3rem 1rem;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      margin: 0 auto 1rem;
      border: 3px solid var(--gray-200);
      border-top: 3px solid var(--red-600);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .loading-container p {
      color: var(--gray-600);
      margin: 0;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `],
})
export class ProductListComponent implements OnInit {
  state$!: Observable<ProductListState>;

  private stateService = inject(ProductListStateService);

  constructor() { }

  ngOnInit(): void {
    this.state$ = this.stateService.state$;
  }

  retry() {
    this.stateService.retry();
  }
}
