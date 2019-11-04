# Generating a new Release

Daffodil releases follow [semver](https://semver.org/) and we have built an internal gulp pipeline to automate the workflow of generating a new release. To generate a new release, and update the project automatically simply:

```bash
npm run release
```

This process will handle the process of updating develop and master, generating a tag, and updating the Github repo. 

## Publishing to npm

Currently, the pipeline does not handle publishing to npm, so that will still have to be done manually. 

To quickly publish the appropriate packages to `npm`.

```bash
npm run generate-packages && npm run publish
```

> Note that you can skip the above `generate-packages` step during a publish if you are doing a publish immediately following a release as the `release` processes generates and verifies the `dist` folder.