import { environment } from 'environments/environment';

declare var System: any;

let baseUrl;

if (environment.production) {
  baseUrl = System.import('../../src/environments/environment');
} else {
  baseUrl = environment.API_BASE;
}

export const coreEnvironment = {
  API_BASE: baseUrl
}