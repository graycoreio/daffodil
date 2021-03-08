# `@daffodil` Redux Action Naming Conventions

Any given action dispatched internally by Daffodil, or exposed by Daffodil in such a way that it exists in user-space, should be authored by the following Convention.

```txt
[packageName] An Action With Good Hygiene
```

For an overview on Action Hygiene, watch the [talk](https://www.youtube.com/watch?v=JmnsEvoy-gY&ab_channel=ng-conf) by @mikeryandev.


## Examples 
We've provided a few examples to illustrate the concepts above.

### Correct

```txt
[@daffodil/category] Category Page Load Action
```

### Incorrect

#### Bad Hygiene
```txt
[@daffodil/category] Load Action
```

#### Bad Convention
```
[@daffodil] Category Page Load Action
```

