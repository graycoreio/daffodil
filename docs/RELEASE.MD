# Generating a new release

Daffodil releases follow [semver](https://semver.org/) and we have built an internal gulp pipeline to automate the workflow of generating a new release. To utilize this workflow, and create a new release for the project:

```bash
npm run release
```

This will handle the process of bumping develop and master, handling package versioning, generating a tag, and updating the Github repo. 

## Publishing to npm

Currently, the pipeline does not handle publishing to npm, so if packages need to be published that will still have to be done manually. 

To quickly publish the appropriate packages to `npm`:

```bash
npm run generate-packages && npm run publish
```

> Note that you can skip the above `generate-packages` step during a publish if you are doing a publish immediately following a release as the `release` processes generates and verifies the `dist` folder.

## Troubleshooting

Sometimes the publish to npm will fail because the one-time password expires while packages are publishing. If this occurs, the unpublished packages will need to be published individually by running `lerna run publish --scope="@daffodil/{package-name}" -- --otp={one-item password}`.
