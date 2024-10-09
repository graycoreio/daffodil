import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';

/**
 * The base class for in-memory drivers.
 */
export abstract class DaffInMemoryDriverBase {
  /**
   * The URL of the corresponding backend.
   * Does not include a trailing slash, it is of the form: `/<api base>/<collection name>`.
   */
  protected readonly url = `/${this.config.apiBase}/${this.collectionName}`;

  constructor(
    private config: InMemoryBackendConfigArgs,
    private collectionName: string,
  ) {}
}
