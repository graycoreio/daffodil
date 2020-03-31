# Hubspot Forms Driver

The Hubspot Forms Driver allows your Daffodil Contact Form feature to connect directly to your hubspot account to manage your contact form submissions. 

To set up the Hubspot Forms Driver import `DaffContactHubSpotDriverModule.forRoot(config)` into your `app.module`, where config is a DaffHubspotConfig object containing information needed to connect to your hubspot form. [Follow this link on where to find your form's information](https://knowledge.hubspot.com/forms/find-your-form-guid).

```typescript
import { DaffContactHubSpotDriverModule } from '@daffodil/contact';

config : DaffHubspotConfig = {portalId: '123456', guid: 'ff9999'};

@NgModule({
  imports: [
    DaffContactHubSpotDriverModule.forRoot(config)
  ]
})
export class AppModule {}
```

Now your `DaffContact` implementation will connect to your registered Hubspot Form for use in your app!

> Only one `daffodil/contact` driver should be imported into your App.Module at a time. To set up a driver configuration to switch between different backend drivers, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->