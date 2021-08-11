

### The Problem

The Angular router has different behavior in SSR and CSR. Consider a resolver that dispatches an action to load some particular data, e.g. a product. This resolver completes when that data has finished loading, indicated with a `ProductLoadSuccess` action. On the client, navigation completes (the `ROUTER_NAVIGATED` action) before `ProductLoadSuccess` enters the action stream
