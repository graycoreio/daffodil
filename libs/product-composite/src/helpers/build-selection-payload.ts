import {
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
  DaffProductCompositeSelectionPayload,
} from '../models/public_api';

export function daffProductCompositeBuildSelectionPayload(appliedOptions: Record<DaffCompositeProductItem['id'], DaffCompositeProductItemOption>): DaffProductCompositeSelectionPayload {
  return Object.keys(appliedOptions).reduce<DaffProductCompositeSelectionPayload>(
    (selection, itemId) => {
      const optionId = appliedOptions[itemId].id;

      if (optionId) {
        selection[itemId] = [optionId];
      }

      return selection;
    },
    {},
  );
}
