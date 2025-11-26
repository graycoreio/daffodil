// @ts-ignore
import sassdoc = require('sassdoc');
import config from './sassdoc.config';
import { SassValueParser } from './value-parser';
import * as fs from 'fs';
import * as path from 'path';

interface SassDocConfig {
  src: string[];
  dest: string;
  theme: string;
  autofill: string[];
  groups: Record<string, string>;
  display: {
    access: string[];
    alias: boolean;
  };
  package: string;
  verbose: boolean;
  parse: boolean;
}

interface SassDocItem {
  [key: string]: any;
}

const isTestMode = process.argv.includes('--test');

async function buildSassDoc(): Promise<void> {
  try {
    let finalConfig: SassDocConfig = { ...config };
    
    if (isTestMode) {
      finalConfig.src = ['../../libs/design/scss/theming/_color-palettes.scss'];
      finalConfig.dest = '../../dist/docs/sass-docs-test';
      console.log('Running SassDoc in test mode');
    } else {
      console.log('Building SassDoc for all SCSS files...');
    }

    const destDir: string = path.resolve(__dirname, finalConfig.dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (isTestMode) {
      const data: SassDocItem[] = await sassdoc.parse(finalConfig.src, { verbose: true });
      console.log('Found', data.length, 'documented items');
      
      const jsonFile: string = path.resolve(__dirname, '../../dist/docs/sassdoc-test-output.json');
      const jsonDir: string = path.dirname(jsonFile);
      
      if (!fs.existsSync(jsonDir)) {
        fs.mkdirSync(jsonDir, { recursive: true });
      }
      
      fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), 'utf8');
      console.log('Raw JSON output saved to:', jsonFile);
      
      const parser = new SassValueParser();
      parser.processSassDocOutput(jsonFile, jsonFile);
      
      await sassdoc(finalConfig.src, finalConfig);
    } else {
      await sassdoc(finalConfig.src, finalConfig);
    }
    
    console.log('SassDoc generation completed');
    
  } catch (error) {
    console.error('SassDoc generation failed:', error);
    process.exit(1);
  }
}

buildSassDoc(); 