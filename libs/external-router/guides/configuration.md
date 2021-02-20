# `@daffodil/external-router` Configuration

The External Router exposes configuration via a configuration object passed to the `forRoot` of the `DaffExternalRouterModule`.

```ts
@NgModule({
	imports: [
		DaffExternalRouterModule.forRoot({
			failedResolutionPath: 'your-custom-error-path',
		}),
	],
})
class AppModule {}
```

## Configuration Options

For further information beyond the documentation here, see `DaffExternalRouterConfiguration`.

| Setting              | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |
