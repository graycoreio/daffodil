# Configuration
You can configure the way that the module works by providing configuration to the `DaffAnalyticsModule`. 

## Configuring `analyzeableActions`
By default, the analytics module doesn't track any events to encourage explicit tracking. For instance, you might want to exclude tracking the event for converting payment card data into a token or "login" actions to avoid logging sensitive information.

```ts
import { DaffAnalyticsModule } from '@daffodil/analytics';

@NgModule({
  imports: [
    DaffAnalyticsModule.forRoot(
      [],
      { analyzeableActions: ['ActionA', 'ActionB'] }
    ),
  ],
})
export class YourAppModule { }
```

This configuration specifically tracks events with the payloads 'ActionA' and 'ActionB', excluding all others. Any defined `DaffAnalyticsTracker` will receive a copy of these events for potential transmission to an external analytics provider.

See the `DaffAnalyticsConfigInterface` for further details.