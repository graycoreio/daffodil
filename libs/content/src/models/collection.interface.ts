import { DaffContentBlock } from './block.interface';

export type DaffContentBlockCollection<T extends DaffContentBlock = DaffContentBlock> = Record<T['id'], T>;
