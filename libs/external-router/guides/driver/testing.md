# Testing

When working with external services, you often want to run tests without depending on the external system's relability or performance. As you write tests for features that depend upon the `@daffodil/external-router/driver` you will find yourself looking for a simple way to meet the `DaffExternalRouterDriverInterface` interface requirements without over-complicating your tests. In these scenarios, having a testing driver that emulates the behavior of an external service is extremely useful. The `DaffExternalRouterTestingDriver` is well-suited for these purposes.

The `DaffExternalRouterTestingDriver` of the `@daffodil/external-router/driver/testing` is useful for Unit Tests, Integration Tests, and simple Acceptance Tests where you don't want to depend on an external service over HTTP.

## Using the testing driver in a spec

See the [testing guide](/libs/external-router/guides/testing.md) for example usage.
