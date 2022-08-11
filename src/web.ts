import { WebPlugin } from '@capacitor/core';

import type { RoamPlugin } from './definitions';

export class RoamWeb extends WebPlugin implements RoamPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
