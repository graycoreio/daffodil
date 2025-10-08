import {
  CommonModule,
  CurrencyPipe,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgOptimizedImage],
  template: `
    @if (product) {
      <div class="product-page">
        <div class="product-container">
          <div class="product-images">
            <div class="main-image">
              <img
                class="product-image"
                [ngSrc]="product.thumbnail?.url || '/assets/placeholder-image.jpg'"
                [alt]="product.thumbnail.label || product.name"
                [priority]="true"
                fill
              />
            </div>
          </div>

          <div class="product-details">
            <div class="product-header">
              @if (product.brand) {
                <span class="product-brand">{{ product.brand }}</span>
              }
              <h1 class="product-title">{{ product.name }}</h1>
            </div>

            <div class="product-price">
              <span class="current-price">{{ (product.price || 0) | currency }}</span>
            </div>

            @if (product.description) {
              <div class="product-description">
                <h3>Description</h3>
                <div [innerHTML]="product.description"></div>
              </div>
            }
          </div>
        </div>
      </div>
    } @else {
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    }
  `,
  styles: [`
    :host {
      --gray-100: #f5f5f5;
      --gray-200: #e5e5e5;
      --gray-300: #d4d4d4;
      --gray-600: #525252;
      --gray-700: #404040;
      --gray-900: #171717;
      --blue-600: #1557e6;
      --green-600: #059669;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .product-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .product-images {
      position: sticky;
      top: 2rem;
    }

    .main-image {
      position: relative;
      aspect-ratio: 1;
      background: var(--gray-100);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-image {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }

    .product-details {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .product-header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .product-brand {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .product-title {
      font-size: 2rem;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
      line-height: 1.2;
      letter-spacing: -0.025em;
    }

    .product-price {
      padding: 1rem 0;
      border-top: 1px solid var(--gray-200);
      border-bottom: 1px solid var(--gray-200);
    }

    .current-price {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    .product-description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .product-description h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
    }

    .product-description div {
      color: var(--gray-700);
      line-height: 1.6;
    }

    .product-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .add-to-cart-btn {
      background: var(--blue-600);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      flex: 1;
      max-width: 300px;
    }

    .add-to-cart-btn:hover {
      background: #1347cc;
      transform: translateY(-1px);
    }

    .product-meta {
      padding: 1.5rem;
      background: var(--gray-100);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .meta-item {
      font-size: 0.875rem;
      color: var(--gray-700);
    }

    .meta-item strong {
      color: var(--gray-900);
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
      border-top: 3px solid var(--blue-600);
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

    @media (max-width: 768px) {
      .product-page {
        padding: 1rem;
      }

      .product-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .product-images {
        position: static;
      }

      .product-title {
        font-size: 1.5rem;
      }

      .current-price {
        font-size: 1.25rem;
      }

      .add-to-cart-btn {
        max-width: 100%;
      }
    }
  `],
})
export class ProductPageComponent implements OnInit {
  product: DaffProduct | null = null;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const resolvedData = <DaffProductDriverResponse>this.route.snapshot.data['product'];
    if (resolvedData && resolvedData.products?.[0]) {
      this.product = resolvedData.products[0];
    }
  }
}
