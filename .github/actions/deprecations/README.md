# Deprecations

Manages `@deprecated` annotations in `libs/**/*.ts` (excluding specs) based on the root `package.json` version. Prerelease suffixes (e.g. `-rc.1`) are stripped before computing versions.

## Modes

- **`annotate`** — appends `Deprecated in version X. Will be removed in version Y.` to every `@deprecated` JSDoc tag that isn't already annotated. Pre-1.0 deprecations are removed three minor versions later; post-1.0 deprecations are removed in the next major version. Used by [`release-please.yml`](../../workflows/release-please.yml).
- **`check`** — fails (exit 1) when any source file contains a symbol marked for removal in the current version, listing the offending files. Used by [`deprecation.yml`](../../workflows/deprecation.yml).

## Usage

```yaml
- uses: ./.github/actions/deprecations
  with:
    mode: annotate # or check
```

In `annotate` mode the action mutates source files in the workspace; committing the changes is left to the calling workflow.

## Development

```sh
# run the unit tests
npx nx run deprecations:test

# rebuild dist/main.js (must be committed)
npx nx run deprecations:build
```
