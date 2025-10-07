import { isPlatformServer } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  RESPONSE_INIT,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Page Not Found</h1>
        <div class="error-actions">
          <a [routerLink]="['/']" class="home-button">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      --gray-100: #f5f5f5;
      --gray-200: #e5e5e5;
      --gray-600: #525252;
      --gray-700: #404040;
      --gray-900: #171717;
      --blue-600: #1557e6;
      --blue-700: #1347cc;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .not-found-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .not-found-content {
      text-align: center;
      max-width: 500px;
    }

    .error-code {
      font-size: 8rem;
      font-weight: 900;
      color: var(--blue-600);
      line-height: 1;
      margin-bottom: 1rem;
      text-shadow: 0 4px 8px rgba(21, 87, 230, 0.2);
    }

    .error-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--gray-900);
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .error-message {
      font-size: 1.125rem;
      color: var(--gray-600);
      line-height: 1.6;
      margin: 0 0 2.5rem 0;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .error-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .home-button {
      display: inline-flex;
      align-items: center;
      padding: 0.875rem 2rem;
      background: var(--blue-600);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(21, 87, 230, 0.3);
    }

    .home-button:hover {
      background: var(--blue-700);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(21, 87, 230, 0.4);
    }

    .error-illustration {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .illustration-circle {
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, var(--blue-600), #6366f1);
      border-radius: 50%;
      opacity: 0.1;
      position: absolute;
    }

    .illustration-text {
      font-size: 4rem;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 768px) {
      .not-found-container {
        padding: 1rem;
        min-height: calc(100vh - 150px);
      }

      .error-code {
        font-size: 6rem;
      }

      .error-title {
        font-size: 2rem;
      }

      .error-message {
        font-size: 1rem;
      }

      .home-button {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
      }

      .illustration-text {
        font-size: 3rem;
      }

      .illustration-circle {
        width: 100px;
        height: 100px;
      }
    }

    @media (max-width: 480px) {
      .error-code {
        font-size: 4rem;
      }

      .error-title {
        font-size: 1.75rem;
      }
    }
  `],
})
export class NotFoundComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private response = inject(RESPONSE_INIT, { optional: true });

  ngOnInit(): void {
    // Set HTTP status to 404 when running on server (SSR)
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status = 404;
    }
  }
}
