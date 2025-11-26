import * as fs from 'fs';
import * as path from 'path';

import config from './sassdoc.config';
import {
  SassDocConfig,
  processSassDoc,
} from './src';

interface RunOptions {
  outputDir?: string;
  outputFilename?: string;
}

async function runSassDocBuild(customConfig?: Partial<SassDocConfig>, options: RunOptions = {}): Promise<void> {
  try {

    const finalConfig: SassDocConfig = { ...config, ...customConfig };

    const {
      outputDir = '../../dist/docs-assets/sassdoc',
      outputFilename = 'output',
    } = options;

    // eslint-disable-next-line no-console
    console.log('Sources:', finalConfig.src);

    const result = await processSassDoc(finalConfig);

    const fullOutputDir = path.resolve(__dirname, outputDir);
    if (!fs.existsSync(fullOutputDir)) {
      fs.mkdirSync(fullOutputDir, { recursive: true });
    }

    const jsonFile = path.resolve(fullOutputDir, `${outputFilename}.json`);
    fs.writeFileSync(jsonFile, JSON.stringify(result.data, null, 2), 'utf8');
    // eslint-disable-next-line no-console
    console.log('JSON output saved to:', jsonFile);

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
