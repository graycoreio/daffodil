# Breakpoints

Breakpoints provides utilities for observing and reacting to viewport size changes.

## Overview

It provides a set of standardized, mobile-first `min-width` media query strings for building responsive layouts with Angular CDK's [`BreakpointObserver`](https://material.angular.io/cdk/layout/overview#breakpointobserver). It includes a server-safe observer that gracefully handles server-side rendering (SSR) by substituting a noop implementation on the server.

## Breakpoint map

The `DaffBreakpoints` enum maps common device viewport widths to CSS media query strings. Each value targets a `min-width` threshold, so styles cascade upward from smaller screens to larger ones.

| Breakpoint | Min Width |
|---|---|
| `MOBILE` | 480px |
| `TABLET` | 768px |
| `BIG_TABLET` | 1024px |
| `SMALL_LAPTOP` | 1200px |
| `LAPTOP` | 1440px |
| `DESKTOP` | 1920px |

## Server-safe observer

`SERVER_SAFE_BREAKPOINT_OBSERVER` is an injection token that resolves to Angular CDK's [`BreakpointObserver`](https://material.angular.io/cdk/layout/overview#breakpointobserver) in the browser and a `NoopBreakpointObserver` on the server, preventing SSR errors when observing breakpoints.

## Usage

```ts
import {
  SERVER_SAFE_BREAKPOINT_OBSERVER,
  DaffBreakpoints
} from '@daffodil/design';

@Component({ ... })
export class MyComponent {
  private breakpointObserver = inject(SERVER_SAFE_BREAKPOINT_OBSERVER);

  isBigTablet$ = this.breakpointObserver
    .observe(DaffBreakpoints.BIG_TABLET)
    .pipe(map((result) => result.matches));
}
```
