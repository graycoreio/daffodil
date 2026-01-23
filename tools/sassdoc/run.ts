import * as fs from 'fs';
import * as path from 'path';
import { rimraf } from 'rimraf';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

import config from './sassdoc.config';
import {
  SassDocConfig,
  processSassDoc,
} from './src';

interface RunOptions {
  outputDir?: string;
}

const addItemToMap = (item: DaffDocsSassItem, group: string, map: Map<string | null, Array<DaffDocsSassItem>>) => {

};

async function runSassDocBuild(customConfig?: Partial<SassDocConfig>, options: RunOptions = {}): Promise<void> {
  try {

    const finalConfig: SassDocConfig = { ...config, ...customConfig };

    const {
      outputDir = '../../dist/docs-assets/sassdoc',
    } = options;

    // eslint-disable-next-line no-console
    console.log('Sources:', finalConfig.src);

    const result = await processSassDoc(finalConfig);

    const fullOutputDir = path.resolve(__dirname, outputDir);
    await rimraf(fullOutputDir);
    if (!fs.existsSync(fullOutputDir)) {
      fs.mkdirSync(fullOutputDir, { recursive: true });
    }

    const groupedItems = result.data.reduce((map, item) => {
      item.group.forEach((group) => {
        if (!map.has(group)) {
          map.set(group, [item]);
        } else {
          map.get(group).push(item);
        }
      });
      return map;
    }, new Map<string | null, Array<DaffDocsSassItem>>());

    groupedItems.forEach((items, group) => {
      const jsonFile = path.resolve(fullOutputDir, `${group}.json`);
      fs.writeFileSync(jsonFile, JSON.stringify(items, null, 2), 'utf8');
      // eslint-disable-next-line no-console
      console.log('JSON output saved to:', jsonFile);
    });
  } catch (error) {
    console.error('SassDoc build failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  runSassDocBuild();
}

export {
  runSassDocBuild,
  RunOptions,
};
