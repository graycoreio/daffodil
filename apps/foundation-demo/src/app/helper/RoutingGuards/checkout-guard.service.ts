import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { DriverVariants } from '../driver-variant/driver-variant.enum';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return !this.isDriverShopify();
  }

  private isDriverShopify(): boolean {
    if (environment.driver != DriverVariants.SHOPIFY) { 
      return false; 
    }

    this.router.navigate(['/product-grid']);

    return true;
  }
}
