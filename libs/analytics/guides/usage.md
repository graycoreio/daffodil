# Usage

## Define a tracking service
In this example, `MyAnalyticsService` implements the `DaffAnalyticsTrackerClass` interface, providing a track method. Inside the track method, you can define your custom logic for tracking analytics events based on the provided action. The service returns an observable, indicating the success of the tracking operation. Replace the logic inside the track method with your actual analytics tracking implementation.

```ts
import { Injectable } from '@angular/core';
import { DaffAnalyticsTrackerClass } from '@daffodil/analytics';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyAnalyticsService implements DaffAnalyticsTrackerClass {

  track(action: Action): Observable<unknown> {
    // Your custom logic for tracking analytics events based on the provided action.
    // Return an observable, for example, indicating whether the tracking was successful.
    return of(true);
  }
}
```

## Set up the root component
```ts
import { DaffAnalyticsModule } from '@daffodil/analytics';

// Import your custom analytics service(s)
import { MyAnalyticsService } from './path/to/my-analytics.service';

@NgModule({
  imports: [
    // Initialize Daffodil Analytics Module with custom analytics service(s)
    DaffAnalyticsModule.forRoot([MyAnalyticsService]),
    // ... other modules
  ],
  // ... other module metadata
})
export class YourAppModule { }
```
