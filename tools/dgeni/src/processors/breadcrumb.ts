import { Document } from 'dgeni';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffBreadcrumb,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { KindedDocument } from './add-kind';
import { FilterableProcessor } from '../utils/filterable-processor.type';

const getStaticBreadcrumb = (segment: string, parent: string): DaffBreadcrumb => {
  switch (segment) {
    case DAFF_DOCS_PATH:
      return {
        label: 'Docs',
        path: `${parent}/${DAFF_DOCS_PATH}`,
      };

    case DAFF_DOCS_DESIGN_PATH:
      return {
        label: 'Design',
        path: `${parent}/${DAFF_DOCS_DESIGN_PATH}`,
      };

    case DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE]:
      return {
        label: 'Guides',
        path: `${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE]}`,
      };

    case DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXPLANATION]:
      return {
        label: 'Explanations',
        path: `${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXPLANATION]}`,
      };

    case DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]:
      return {
        label: 'Packages',
        path: `${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]}`,
      };

    case DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXAMPLE]:
      return {
        label: 'Examples',
        path: `${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXAMPLE]}`,
      };

    case DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]:
      return {
        label: 'API',
        path: `${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]}`,
      };

    default:
      return null;
  }
};

/**
 * A dgeni document which has breadcrumbs added.
 */
export interface BreadcrumbedDocument extends Document {
  breadcrumbs: Array<DaffBreadcrumb>;
}

export class BreadcrumbProcessor implements FilterableProcessor {
  readonly name = 'breadcrumb';
  readonly $runAfter = ['paths-computed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];

  constructor(
    private aliasMap,
  ) {}

  private getBreadcrumbs(doc: KindedDocument): Array<DaffBreadcrumb> {
    const segments = doc.path.split('/');
    const breadcrumbs = segments
      .map((segment, i) =>
        // add a leading slash to parent path if needed
        getStaticBreadcrumb(segment, ['', ...segments.slice(0, i)].join('/')))
      .filter((breadcrumb) => !!breadcrumb);

    // once all static breadcrumbs are generated,
    // create dynamic breadcrumbs for doc kinds that need them
    // TODO: determine actual requirements for this feature
    switch (doc.kind) {
      case DaffDocKind.PACKAGE:
      case DaffDocKind.API:
        // check if the doc is nested under a containing package
        if (segments.length - breadcrumbs.length > 1) {
          // get containing package
          const parentDoc = this.aliasMap.getDocs(segments[breadcrumbs.length])?.[0];
          if (parentDoc) {
            breadcrumbs.push({
              label: parentDoc.name || parentDoc.title,
              path: parentDoc.path,
            });
          } else {
            console.log(doc.name || doc.title);
          }
        }
        break;

      case DaffDocKind.GUIDE:
      case DaffDocKind.EXPLANATION:
      case DaffDocKind.EXAMPLE:
      default:
        break;
    }

    return [
      ...breadcrumbs,
      {
        label: doc.name || doc.title,
        path: doc.path,
      },
    ];
  }

  $process(docs: Array<Document>): Array<BreadcrumbedDocument> {
    return docs.map(doc => ({
      ...doc,
      breadcrumbs: this.docTypes.includes(doc.docType)
        ? this.getBreadcrumbs(doc)
        : [],
    }));
  }
};
