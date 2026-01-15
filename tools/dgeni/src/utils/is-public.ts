import { Document } from 'dgeni';

export const isPublic = (doc: Document): boolean => !doc.tags.tagsByName.get('docs-private');
