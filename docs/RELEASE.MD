# Generating A New Release
1. `git checkout -b release-x.x.x origin/develop`
2. `lerna version --no-push --no-git-tag-version`
3. Update `peerDependencies` within packages
    * Semver patch, no changes
    * Semver minor, bump `@daffodil` versions
    * Semver major, bump `@daffodil` versions
4. `git add .`
5. `git commit -m "chore(release): release vx.x.x"`
6. `git tag -a vx.x.x -m "Release x.x.x"`
7. `git pull`
8. `git branch -d develop && git checkout develop && git merge release-x.x.x`
9. `git branch -d master && git checkout master && git merge release-x.x.x`
10. `npm run prepublishOnly && npm run publish`
11. `git push origin master && git checkout develop && git push origin develop && git checkout vx.x.x && git push origin vx.x.x`