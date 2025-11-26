// @ts-ignore
import config from './sassdoc.config';
import { processSassDoc } from './build';
import { SassDocConfig } from './sassdoc.config';
import * as fs from 'fs';
import * as path from 'path';

interface RunOptions {
  outputDir?: string;
  outputFilename?: string;
}

async function runSassDocBuild(customConfig?: Partial<SassDocConfig>, options: RunOptions = {}): Promise<void> {
  try {
  
    const finalConfig: SassDocConfig = { ...config, ...customConfig };
    
    const {
      outputDir = '../../dist/docs',
      outputFilename = 'sassdoc-output',
    } = options;

    console.log('Sources:', finalConfig.src);

    const result = await processSassDoc(finalConfig);

    const fullOutputDir = path.resolve(__dirname, outputDir);
    if (!fs.existsSync(fullOutputDir)) {
      fs.mkdirSync(fullOutputDir, { recursive: true });
    }

    const jsonFile = path.resolve(fullOutputDir, `${outputFilename}.json`);
    fs.writeFileSync(jsonFile, JSON.stringify(result.data, null, 2), 'utf8');
    console.log('JSON output saved to:', jsonFile);

  } catch (error) {
    console.error('SassDoc build failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  runSassDocBuild();
}

export { runSassDocBuild, RunOptions };
