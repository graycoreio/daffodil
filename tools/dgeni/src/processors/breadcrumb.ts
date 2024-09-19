import { Document } from 'dgeni';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffBreadcrumb,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { KindedDocument } from './add-kind';
import { ParentedDocument } from '../transforms/daffodil-api-package/processors/add-subpackage-exports';
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

const getParents = (doc: ParentedDocument): Array<ParentedDocument> =>
  doc.parent
    ? [...getParents(doc.parent), doc.parent]
    : [];

export const BREADCRUMB_PROCESSOR_NAME = 'breadcrumb';

export class BreadcrumbProcessor implements FilterableProcessor {
  readonly name = BREADCRUMB_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];

  constructor(
    private aliasMap,
  ) {}

  private getBreadcrumbs(doc: ParentedDocument & KindedDocument): Array<DaffBreadcrumb> {
    const segments = doc.path.split('/');
    const breadcrumbs = segments
      .map((segment, i) =>
        // add a leading slash to parent path if needed
        getStaticBreadcrumb(segment, segments.slice(0, i).join('/')))
      .filter((b) => !!b);

    // once all static breadcrumbs are generated,
    // create dynamic breadcrumbs for doc kinds that need them
    // TODO: determine actual requirements for this feature
    switch (doc.kind) {
      case DaffDocKind.PACKAGE:
        breadcrumbs.push(...segments
          .slice(breadcrumbs.length + 1, segments.length - 1)
          .flatMap((idFragment, i, ids) => this.aliasMap.getDocs(ids.slice(0, i + 1).join('/')))
          .map((parent, i, parents) => {
            const label = parent.name || parent.title;
            const parentLabel = parents[i - 1]?.name || parents[i - 1]?.title;
            return {
            // trim label to only include extra info
              label: label.replace(`${parentLabel}/`, ''),
              path: parent.path,
            };
          }),
        );
        break;

      case DaffDocKind.API:
        if (doc.parent) {
          // build a list of parents to this doc and turn them into breadcrumbs
          breadcrumbs.push(...[
            ...getParents(doc.parent),
            doc.parent,
          ].map((parent, i, parents) => ({
            // trim label to only include info that is not in the parent
            label: parent.name.replace(`${parents[i - 1]?.name}/`, ''),
            path: parent.path,
          })));
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

  $process(docs: Array<ParentedDocument & KindedDocument>): Array<BreadcrumbedDocument> {
    return docs.map(doc => ({
      ...doc,
      breadcrumbs: this.docTypes.includes(doc.docType)
        ? this.getBreadcrumbs(doc)
        : [],
    }));
  }
};

export const BREADCRUMB_PROCESSOR_PROVIDER = <const>[
  BREADCRUMB_PROCESSOR_NAME,
  (aliasMap) => new BreadcrumbProcessor(aliasMap),
];
