import { isDevMode } from '@angular/core';

const MESSAGE = 'The auto driver entrypoint is a placeholder for auto driver versioning. It should not end up in the app bundle. Ensure you have followed the guide at https://daff.io/docs/guides/essentials/drivers#automatically-versioned-drivers.';

if (isDevMode()) {
  throw new Error(MESSAGE);
} else {
  console.error(MESSAGE);
}

export {};
