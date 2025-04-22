import type {
  ClassLikeExportDoc,
  HeritageInfo,
} from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';
import type { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';
import type { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';

import { DaffApiDocBase } from './base.type';
import { DaffDocsApiFunctionParam } from './function.type';
import {
  DaffDocsApiDecorator,
  DaffDocsApiRole,
} from '../../api/public_api';
import { DaffDocsRenderedContent } from '../rendered-content.type';

type MemberFields = 'name' | 'accessibility' | 'aliases' | 'isAbstract' | 'isStatic' | 'isReadonly' | 'isOptional' | 'isGetAccessor' | 'isSetAccessor';

export interface DaffDocsApiTypeProperty extends Pick<PropertyMemberDoc, MemberFields> {
  decorators: Array<DaffDocsApiDecorator>;
  description: DaffDocsRenderedContent;
  type: DaffDocsRenderedContent;
  deprecated: string;
}

export interface DaffDocsApiTypeMethod extends Pick<MethodMemberDoc, MemberFields | 'typeParameters'> {
  decorators: Array<DaffDocsApiDecorator>;
  parameterDocs: Array<DaffDocsApiFunctionParam>;
  description: DaffDocsRenderedContent;
  type: DaffDocsRenderedContent;
  deprecated: string;
}

export interface DaffDocsApiHeritageInfo extends Pick<HeritageInfo, 'text'> {}

/**
 * An API doc base for doc roles that are types.
 */
export interface DaffApiType<Prop extends DaffDocsApiTypeProperty = DaffDocsApiTypeProperty> extends DaffApiDocBase, Pick<ClassLikeExportDoc, 'typeParams' | 'name'> {
  /**
   * A list of properties on this type.
   * This includes getters and setters in addition to basic fields.
   */
  props: Array<Prop>;
  /**
   * A list of methods on this type.
   */
  methods: Array<DaffDocsApiTypeMethod>;
  decorators: Array<DaffDocsApiDecorator>;
  extendsClauses: Array<DaffDocsApiHeritageInfo>;
  implementsClauses: Array<DaffDocsApiHeritageInfo>;
}

export interface DaffApiTypeDoc extends DaffApiType {
  role: DaffDocsApiRole.TYPE;
}
