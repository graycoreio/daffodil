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

    case 'components':
      return {
        label: 'Components',
        path: `${parent}/components`,
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

/**
 * Truncates the label of a breadcrumb such that it will only be the info not contained in the parent.
 */
const truncateLabel = (label: string, parent: string): string =>
  label.replace(`${parent}/`, '');

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
    const segments = (<string>doc.path).split('/');
    const breadcrumbs = segments
      .map((segment, i) => getStaticBreadcrumb(segment, segments.slice(0, i).join('/')))
      .filter((b, i, ary) => !!b && ary.findIndex((e) => e?.label === b.label) === i);

    // once all static breadcrumbs are generated,
    // create dynamic breadcrumbs for doc kinds that need them
    // TODO: determine actual requirements for this feature
    switch (doc.kind) {
      case DaffDocKind.PACKAGE:
        const parents_ = segments
        // get all the dynamic segments not including the last (which is the current doc)
        // we only want to process dynamic parents here
          .slice(breadcrumbs.length + 1, segments.length - 1)
        // look up parents based on an alias built from segments
          .flatMap((_, i, ids) => this.aliasMap.getDocs(ids.slice(0, i + 1).join('/')));
        breadcrumbs.push(
          // turn the parent docs into breadcrumbs
          ...parents_.map((parent, i) => ({
            label: truncateLabel(parent.title, parents_[i - 1]?.title),
            path: parent.path,
          })),
          {
            label: parents_.length > 0 ? truncateLabel(doc.title, parents_[parents_.length - 1].title) : doc.title,
            path: doc.path,
          },
        );
        break;

      case DaffDocKind.API:
        if (doc.parent) {
          // build a list of parents to this doc and turn them into breadcrumbs
          const parents = [
            ...getParents(doc.parent),
            doc.parent,
          ];
          breadcrumbs.push(
            ...parents.map((parent, i) => ({
              label: truncateLabel(parent.name, parents[i - 1]?.name),
              path: parent.path,
            })),
            {
              label: parents.length > 0 ? truncateLabel(doc.name, parents[parents.length - 1].name) : doc.name,
              path: doc.path,
            },
          );
        } else {
          breadcrumbs.push(
            {
              label: doc.name,
              path: doc.path,
            },
          );
        }
        break;

      case DaffDocKind.GUIDE:
      case DaffDocKind.EXPLANATION:
      case DaffDocKind.EXAMPLE:
      default:
        breadcrumbs.push({
          label: doc.name || doc.title,
          path: doc.path,
        });
        break;
    }

    // ensure that breadcrumbs have absolute paths
    return breadcrumbs.map((breadcrumb) => {
      if (breadcrumb.path[0] !== '/') {
        breadcrumb.path = `/${breadcrumb.path}`;
      }
      return breadcrumb;
    });
  }

  $process(docs: Array<ParentedDocument & KindedDocument>): Array<ParentedDocument & KindedDocument & BreadcrumbedDocument> {
    return docs.map(doc => {
      doc.breadcrumbs = this.docTypes.includes(doc.docType)
        ? this.getBreadcrumbs(doc)
        : [];
      return <ParentedDocument & KindedDocument & BreadcrumbedDocument>doc;
    });
  }
};

export const BREADCRUMB_PROCESSOR_PROVIDER = <const>[
  BREADCRUMB_PROCESSOR_NAME,
  (aliasMap) => new BreadcrumbProcessor(aliasMap),
];
