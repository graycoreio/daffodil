import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendAuthService } from './auth.service';

describe('DaffAuthInMemoryBackend | Integration', () => {
  let httpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendAuthService)
      ],
    });

    httpClient = TestBed.get(HttpClient);
  });

  describe('processing a login request', () => {
    it('should process post requests of the form `/api/auth/login` and return a token', done => {
      httpClient.post('/api/auth/login', {}).subscribe(result => {
        expect(result).toBeDefined();
        done();
      });
    });
  });

  describe('processing a register request', () => {
    it('should process post requests of the form `/api/auth/register` and return the customer info', done => {
      httpClient.post('/api/auth/register', {}).subscribe(result => {
        expect(result).toBeDefined();
        done();
      });
    });
  });
});
