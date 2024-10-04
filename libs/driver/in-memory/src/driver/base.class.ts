import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';

export abstract class DaffInMemoryDriverBase {
  protected readonly url = `/${this.config.apiBase}/${this.collectionName}`;

  constructor(
    private config: InMemoryBackendConfigArgs,
    private collectionName: string,
  ) {}
}
