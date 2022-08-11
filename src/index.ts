import { registerPlugin } from '@capacitor/core';

import type { RoamPlugin } from './definitions';

const Roam = registerPlugin<RoamPlugin>('Roam', {
  web: () => import('./web').then(m => new m.RoamWeb()),
});

export * from './definitions';
export { Roam };
