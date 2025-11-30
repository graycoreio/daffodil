import { DaffContentSchema } from '@daffodil/content';

export interface DaffContentChatMessage {
  type: 'user' | 'system';
  message: string;
  schema?: DaffContentSchema;
}
