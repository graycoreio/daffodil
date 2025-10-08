import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductListComponent } from '../../product/components/product-list/product-list.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Build a storefront that connects to <em>any</em> ecommerce platform</h1>
        <p class="hero-subtitle">Daffodil is an Angular-based frontend framework that provides the driver architecture to build, scale, and switch backends for a faster and more adaptable ecommerce storefront.</p>
        <div class="hero-actions">
          <a href="https://github.com/graycoreio/daffodil" target="_blank" rel="noopener noreferrer" class="hero-button primary">
            ⭐ Star on GitHub
          </a>
          <a href="https://discord.gg/BdaJVZ53sR" target="_blank" rel="noopener noreferrer" class="hero-button secondary">
            💬 Join Discord
          </a>
        </div>
      </div>
    </section>
    <app-product-list></app-product-list>
  `,
  styles: [`
    .hero {
      background: #f8f9fa;
      padding: 4rem 2rem;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 1.5rem 0;
      color: var(--gray-900);
      letter-spacing: -0.01em;
    }

    .hero-title em {
      font-style: italic;
      color: var(--bright-blue);
    }

    .hero-subtitle {
      font-size: 1.125rem;
      line-height: 1.6;
      margin: 0 0 2rem 0;
      color: var(--gray-700);
      font-weight: 400;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-button {
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      text-decoration: none;
    }

    .hero-button.primary {
      background: var(--bright-blue);
      color: white;
    }

    .hero-button.primary:hover {
      background: #1557e6;
    }

    .hero-button.secondary {
      background: transparent;
      color: var(--gray-700);
      border: 1px solid var(--gray-400);
    }

    .hero-button.secondary:hover {
      background: var(--gray-400);
      color: var(--gray-900);
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1.5rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-button {
        width: 200px;
      }
    }
  `],
})
export class HomeComponent {
}
