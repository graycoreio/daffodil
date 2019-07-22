# Generating A New Release

1. `lerna version --no-push --no-git-tag-version`
2. Reset head back a commit
3. Update `peerDependencies` within packages
4. Run a build
5. `lerna publish from-package --contents dist`