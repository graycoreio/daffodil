# Hubspot Forms Driver

The Hubspot Forms Driver allows your Daffodil Newsletter Form feature to connect directly to your hubspot account to manage your newsletter form submissions. 

To set up, inside of your `app.module` first import `DaffNewsletterHubSpotDriverModule` from `@daffodil/newsletter`. Next, in your imports section include `DaffNewsletterHubSpotDriverModule.forRoot(config)`, where config is a DaffHubspotConfig object containing information needed to connect to your hubspot form. [Follow this link on where to find your form's information](https://knowledge.hubspot.com/forms/find-your-form-guid).

```typescript
import { DaffNewsletterHubSpotDriverModule } from '@daffodil/Newsletter';

config : DaffHubspotConfig = {portalId: '123456', guid: 'ff9999'};

@NgModule({
  imports: [
    DaffNewsletterHubSpotDriverModule.forRoot(config)
  ]
})
export class AppModule {}
```

Now your `DaffNewsletter` implementation will connect to your registered Hubspot Form for use in your app!

> It is important to note to only have one `daffodil/newsletter` driver set up in your App.Module at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->