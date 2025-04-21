import { DaffApiActionDoc } from './action.type';
import { DaffApiComponentDoc } from './component.type';
import { DaffApiConstantDoc } from './constant.type';
import { DaffApiDirectiveDoc } from './directive.type';
import { DaffApiErrorDoc } from './error.type';
import { DaffApiFacadeDoc } from './facade.type';
import { DaffApiGuardDoc } from './guard.type';
import { DaffApiHelperDoc } from './helper.type';
import { DaffApiMockDoc } from './mock.type';
import { DaffApiModelFactoryDoc } from './model-factory.type';
import { DaffApiModuleDoc } from './module.type';
import { DaffApiOperatorDoc } from './operator.type';
import { DaffApiPipeDoc } from './pipe.type';
import { DaffApiProviderDoc } from './provider.type';
import { DaffApiReducerDoc } from './reducer.type';
import { DaffApiResolverDoc } from './resolver.type';
import { DaffApiSelectorDoc } from './selector.type';
import { DaffApiServiceDoc } from './service.type';
import { DaffApiTokenDoc } from './token.type';
import { DaffApiTypeDoc } from './type.type';

export type DaffApiDoc =
| DaffApiComponentDoc
| DaffApiDirectiveDoc
| DaffApiPipeDoc
| DaffApiServiceDoc
| DaffApiModuleDoc
| DaffApiGuardDoc
| DaffApiResolverDoc
| DaffApiReducerDoc
| DaffApiActionDoc
| DaffApiFacadeDoc
| DaffApiSelectorDoc
| DaffApiProviderDoc
| DaffApiOperatorDoc
| DaffApiErrorDoc
| DaffApiTokenDoc
| DaffApiTypeDoc
| DaffApiConstantDoc
| DaffApiHelperDoc
| DaffApiModelFactoryDoc
| DaffApiMockDoc;
