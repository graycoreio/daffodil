# Release

Daffodil releases follow [semver](https://semver.org/) and utilizes [release please](https://github.com/googleapis/release-please) to automate the release process.

## Creating a release

Merge the release please PR and everything else will be automated.

## Publishing to npm

The release please CI handles all publishing tasks.

## Deprecations

Deprecations are annotated with the version deprecated and the version where the symbol is slated for removal. In pre-release, this is 3 minor versions after deprecation. After the v1 release, deprecated symbols will be removed every major version. Marking deprecations is done automatically. The release please script will throw if any symbols marked for removal in that version exist.