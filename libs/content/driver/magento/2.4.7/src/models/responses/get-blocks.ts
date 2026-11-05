import { MagentoContentBlock } from '../block.interface';

export interface MagentoGetBlocksResponse {
  cmsBlocks: {
    __typename?: 'CmsBlocks';
    items: MagentoContentBlock[];
  };
}
