// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  useMocks: false,
  e2e: false,
  name: "prod",

  API_BASE: "http://www.SOMEREALFAKEURL.com/",
  httpServiceSettings: {
    endpoint: '/example/endpoint'
  }
};
