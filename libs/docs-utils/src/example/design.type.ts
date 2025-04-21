import { DaffDocsRenderedContent } from '../doc/public_api';

export interface DaffDocsDesignExampleFile {
  name: string;
  content: DaffDocsRenderedContent;
  // TODO: extract into enum
  language: 'typescript' | 'html' | 'css' | '';
}

export interface DaffDocsDesignExample {
  id: string;
  docType: 'design-example';
  name: string;
  element: string;
  files: Array<DaffDocsDesignExampleFile>;
}
