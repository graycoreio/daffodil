export interface DaffioEnvironment {
  production: boolean;
  docsPath: string;
  algolia: {
    appId: string;
    apiKey: string;
    indexName: string;
  };
}
