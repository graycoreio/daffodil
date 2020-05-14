import { Injectable } from '@angular/core';
import { DesignLandCodeExample } from '../model/code-example';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export const UnknownExample: DesignLandCodeExample = {
	element: 'unknown-example-element',
	files: [
		{
			name: 'unknown-file.ts',
      content: '<unknown></unknown>',
      language: 'html'
		},
	],
};

export interface DgeniDesignExampleDoc {
  id: string, 
  docType: string,
  name: string,
  files: any[],
}

@Injectable({
  providedIn: 'root'
})
export class CodeExampleService {
  private docsLocation: string = "/assets/design-examples/";
  constructor(private httpClient: HttpClient) { }

  get(key: string): Observable<DesignLandCodeExample> {
    return this.httpClient.get<DgeniDesignExampleDoc>(this.docsLocation + key + '.json').pipe(
        map((example) => {
          return {
            ...example,
            name: undefined,
            element: example.name + '-example'
          }
        })
    );
  }
}
