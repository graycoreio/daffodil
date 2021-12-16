# Daffodil Search Architecture

Daffodil aims to decouple the main search feature from the various kinds of search entities (products, category, CMS pages, etc.) while still providing rich search results. The semantics of search is highly platform-dependent; the driver architecture should allow for both global and disparate platform search calls.

## Drivers

### Global

In the event that a supported platform has a single call that covers all the entities, there will be a driver package in the `@daffodil/search` scope i.e. `@daffodil/search/driver/platform`.

### Federated

In the case that a platform does not have a global search call, search features will be accessed via the _federated_ search driver: `@daffodil/search/driver/federated`.

`@daffodil/search/driver/federated` exposes an injection point for "child" drivers to provide feature-specific platform search calls. The federated driver will then invoke these provided children in parallel and collate their results.

A separate "join package" will take care of providing feature-specific drivers. For example, `@daffodil/product-search/driver/magento` adds product searching to `@daffodil/search/driver/federated`.

## Models

Daffodil necessarily cannot fully type the search results. A number of fields are standard for rendering a search result and are therefore guaranteed, e.g. `title` and `id`. To accommodate as many use cases as possible, an `extra_attributes` field is provided on the search result. Individual drivers can expose mechanisms for the app to request additional fields that will be included in `extra_attributes`.
