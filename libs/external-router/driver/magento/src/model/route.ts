import { MagentoCategoryRoute } from './category-route';
import { MagentoCmsPageRoute } from './page-route.type';
import { MagentoProductRoute } from './product-route';
import { MagentoRoutable } from './routable';

export type MagentoRoute = MagentoRoutable | MagentoProductRoute | MagentoCategoryRoute | MagentoCmsPageRoute;
