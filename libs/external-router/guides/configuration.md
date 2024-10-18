# Configuration

`@daffodil/external-router` can be configured by passing a `DaffExternalRouterConfiguration` to `provideExternalRouter`.

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    ...
    provideExternalRouter({ failedResolutionPath: '/error' }),
  ],
};
```

## Configuration Options

| Property             | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |

For more information, see `DaffExternalRouterConfiguration`.
