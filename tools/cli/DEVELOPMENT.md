# Development Guide

The purpose of this guide is to help you test the `@daffodil/cli` schematic locally against a fresh Angular application.

## Testing the ng-add Schematic Locally

This guide uses [Verdaccio](https://verdaccio.org/) as a local npm registry to publish and install `@daffodil/*` packages.

### 1. Start Verdaccio

```bash
docker run -d --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

Wait for it to be healthy:

```bash
curl -s http://localhost:4873/-/ping
```

### 2. Authenticate with Verdaccio

```bash
REGISTRY_URL="http://localhost:4873"
TOKEN=$(curl -s -X PUT ${REGISTRY_URL}/-/user/org.couchdb.user:ci \
  -H "Content-Type: application/json" \
  -d '{"name":"ci","password":"Ci-test-password-1234","type":"user"}' | jq -r '.token')

if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then echo "ERROR: Failed to obtain Verdaccio token" && exit 1; fi

export NPM_CONFIG_USERCONFIG=$(pwd)/.npmrc
sed -i '/@daffodil:registry/d; /localhost:4873/d' .npmrc 2>/dev/null || true && printf "@daffodil:registry=${REGISTRY_URL}\n//localhost:4873/:_authToken=${TOKEN}\n" >> .npmrc
```

### 3. Build and Publish

From the root of the Daffodil repository:

```bash
npx nx run @daffodil/cli:verdaccio:publish
```

> [!TIP]
> To unpublish all `@daffodil/*` packages from Verdaccio:
> ```bash
> npx nx run @daffodil/cli:verdaccio:unpublish
> ```
> Both scripts will refuse to run if the `@daffodil` registry is not pointing at localhost.

### 4. Scaffold a Test App and Run the Schematic

```bash
mkdir -p /tmp/daffodil-cli-test && cd /tmp/daffodil-cli-test
npx @angular/cli@20 new test-app --style=scss --ssr --defaults --skip-git

cd test-app
npx ng add @daffodil/cli@0.0.0-test.local

```

### 5. Verify

```bash
npx ng build
```

### Clean Up

```bash
# Remove the test application
rm -rf /tmp/daffodil-cli-test

# Stop and remove Verdaccio
docker stop verdaccio && docker rm verdaccio

# Remove the Verdaccio lines from .npmrc
sed -i '/@daffodil:registry/d; /localhost:4873/d' .npmrc
```

### Troubleshooting

- **Verdaccio not reachable**: Ensure port 4873 is not in use and the container is running (`docker ps`).
- **Publish fails with 401**: Re-run the authentication step; the token may have expired.
- **Angular CLI version mismatch**: Ensure your Angular CLI version is compatible with the schematic's Angular version requirements.
- Use `ng add @daffodil/cli --dry-run` to preview changes without applying them.