import type { MemberDoc } from 'dgeni-packages/typescript/api-doc-types/MemberDoc';
import type { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';
import type { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';

/**
 * A union of the kinds of typescript class members.
 */
export type DaffDocsTsClassMemberDocument =
| MethodMemberDoc
| PropertyMemberDoc
| MemberDoc;
