import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import {
  NavigationStateService,
  NavigationState,
} from './state/navigation.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [NavigationStateService],
  template: `
    <ng-content></ng-content>
    <nav class="megamenu-navigation">
      <div class="nav-container">
        <a [routerLink]="['/']" class="store-name">Daffodil Commerce</a>
        <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" aria-label="Toggle navigation">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        <ul class="nav-list" [class.mobile-open]="isMobileMenuOpen">
          @if (navigationState$ | async; as state) {
            @if (state.loading) {
              <li class="nav-loading">Loading...</li>
            } @else if (state.error) {
              <li class="nav-error">
                <span>Error loading menu</span>
                <button (click)="retry()" class="retry-btn">Retry</button>
              </li>
            } @else if (state.data) {
              @for (item of state.data.children || []; track item.id) {
                <li
                  class="nav-item"
                  [class.has-dropdown]="item.children && item.children.length > 0">
                  <a [routerLink]="item.url" class="nav-link" (click)="closeMobileMenu()">{{ item.name }}</a>
                  @if (item.children && item.children.length > 0) {
                    <div class="megamenu-dropdown">
                      <div class="dropdown-content">
                        <div class="category-column">
                          <ul class="subcategory-list">
                            @for (subItem of item.children; track subItem.id) {
                              <li class="subcategory-item">
                                <a [routerLink]="subItem.url" class="subcategory-link" (click)="closeMobileMenu()">{{ subItem.name }}</a>
                              </li>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                </li>
              }
            }
          }
        </ul>
      </div>
    </nav>
    <div class="mobile-overlay" [class.active]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>
  `,
  styles: [`
    .megamenu-navigation {
      width: 100%;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      padding: 1rem 0;
      line-height: 1rem;
    }

    .nav-container {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .store-name {
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      justify-self: start;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .store-name:hover {
      color: #007bff;
    }

    .nav-list {
      display: flex;
      justify-content: center;
      list-style: none;
      gap: 2rem;
      align-items: center;
      margin: 0;
      grid-column: 2;
      padding: 0;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      border-radius: 4px;
      transition: background-color 0.2s ease;
      display: block;
    }

    .nav-link:hover {
      background-color: #e9ecef;
    }

    .has-dropdown:hover .megamenu-dropdown {
      display: block;
    }

    .megamenu-dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      min-width: 250px;
      z-index: 1000;
      padding: 1rem 0;
    }

    .dropdown-content {
      padding: 0;
    }

    .category-column {
      width: 100%;
    }

    .subcategory-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .subcategory-item {
      width: 100%;
    }

    .subcategory-link {
      display: block;
      padding: 0.5rem 1rem;
      color: #666;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .subcategory-link:hover {
      background-color: #f8f9fa;
      color: #333;
    }

    .nav-loading {
      color: #666;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }

    .nav-error {
      color: #6c757d;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 2rem;
    }

    .retry-btn {
      padding: 0.25rem 0.5rem;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.75rem;
    }

    .retry-btn:hover {
      background: #5a6268;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      padding: 0.5rem;
      gap: 3px;
      justify-self: end;
    }

    .hamburger-line {
      width: 20px;
      height: 2px;
      background: #333;
      transition: all 0.3s ease;
    }

    .mobile-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .mobile-overlay.active {
      display: block;
      opacity: 1;
    }

    @media (max-width: 768px) {
      .nav-container {
        grid-template-columns: auto 1fr auto;
        position: relative;
      }

      .mobile-menu-toggle {
        display: flex;
      }

      .nav-list {
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100%;
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem 1.5rem;
        gap: 0;
        z-index: 1000;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        overflow-y: auto;
      }

      :host-context(body:hover) .nav-list {
        transition: transform 0.3s ease;
      }

      .nav-list.mobile-open {
        transform: translateX(0);
      }

      .nav-item {
        width: 100%;
        border-bottom: 1px solid #f1f3f4;
        margin-bottom: 0.5rem;
      }

      .nav-item:last-child {
        border-bottom: none;
      }

      .nav-link {
        padding: 1rem 0;
        display: block;
        width: 100%;
        color: #333;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .nav-link:hover {
        color: #007bff;
        background: none;
      }

      .megamenu-dropdown {
        position: static;
        display: block;
        border: none;
        box-shadow: none;
        border-radius: 4px;
        padding: 0;
      }

      .has-dropdown .megamenu-dropdown {
        display: block;
      }

      .subcategory-link {
        padding: 0.5rem 0;
        font-size: 0.95rem;
        color: #666;
        display: block;
      }

      .subcategory-link:hover {
        color: #007bff;
        background: none;
      }
    }
  `],
})
export class NavigationComponent implements OnInit {
  private navigationStateService = inject(NavigationStateService);

  navigationState$!: Observable<NavigationState>;
  isMobileMenuOpen = false;

  ngOnInit(): void {
    this.navigationState$ = this.navigationStateService.state$;
  }

  retry(): void {
    this.navigationStateService.retry();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
