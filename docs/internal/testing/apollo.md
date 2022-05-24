# Testing Apollo

## Troubleshooting

### Flushed network response data has missing data

#### Possible causes

- Mismatch between flushed data in the test and the type param passed to `Apollo#query` in the source. (invariant violation)
  Apollo will ensure that the structure of the flushed data matches that of the query type. It should throw a console warning about an invariant vioation when it does so.
- Missing `__typename` for fields fetched by fragments.
  Even when `__typename` isn't explicitly set in the query, Apollo will use it to match the fragment type (`fragment name on Type`). The flushed data therefore must have `__typename` set to the correct value as well as added to the model interface as at least an optional field.
