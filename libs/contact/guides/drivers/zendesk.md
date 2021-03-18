# @daffodil/contact Zendesk Driver

The Zendesk driver provides an implementation of the `@daffodil/contact/driver` specification. In particular, it provides a driver that allows users to send **anonymous** requests to a configured Zendesk instance.

## Usage
> This uses the [anonymous requests api of Zendesk](https://developer.zendesk.com/rest_api/docs/support/requests). Please ensure that you have enabled the feature in your Zendesk instance before you attempt to use this!

Simply import the `DaffContactZendeskDriverModule` into your application like so:

```ts
import { HttpClientModule } from '@angular/common/http';
import { ContactZendeskDriverModule } from '@daffodil/contact/drivers/zendesk';

@NgModule({
  imports: [
    ...
    HttpClientModule,
    DaffContactZendeskDriverModule.forRoot({
      subdomain: 'yourdomain'
    })
    ...
  ],
})
export class AppModule { }
```