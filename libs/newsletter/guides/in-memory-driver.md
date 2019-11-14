# Using the InMemory Driver

The InMemory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a newsletter subscription and return fake confirmation data. 

To set up, inside of your `app.module` make sure to include the `DaffNewsletterInMemoryDriverModule.forRoot()` inside of your imports section, as well as import the `DaffNewsletterInMemoryDriverModule` from the `@daffodil/newsletter/testing` library

```ts
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';

@NgModule({
  imports: [
  DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class AppModule {}

```