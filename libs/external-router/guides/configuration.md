# `@daffodil/external-router` Configuration

The External Router exposes a configuration token that you can provide in order to configure your the behavior of the package.

```ts
@NgModule({
	providers: [
		{
			provide: DAFF_EXTERNAL_ROUTER_CONFIG,
			useValue: {
				failedResolutionPath: 'your-custom-error-path',
			},
		},
	],
})
class AppModule {}
```

## Configuration Options

For further information beyond the documentation here, see `DaffExternalRouterConfiguration`.

| Setting              | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |
