const sassdoc = require('sassdoc');
const config = require('./sassdoc.config.js');
const fs = require('fs');
const path = require('path');

const isTestMode = process.argv.includes('--test');

async function buildSassDoc() {
  try {
    let finalConfig = { ...config };
    
    if (isTestMode) {
      finalConfig.src = ['../../libs/design/scss/typography/mixins/_font-weight.scss'];
      finalConfig.dest = '../../dist/docs/sass-docs-test';
      console.log('Running SassDoc in test mode');
    } else {
      console.log('Building SassDoc for all SCSS files...');
    }

    const destDir = path.resolve(__dirname, finalConfig.dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (isTestMode) {
      const data = await sassdoc.parse(finalConfig.src, { verbose: true });
      console.log('Found', data.length, 'documented items');
      
      const jsonFile = path.resolve(__dirname, '../../dist/docs/sassdoc-test-output.json');
      const jsonDir = path.dirname(jsonFile);
      
      if (!fs.existsSync(jsonDir)) {
        fs.mkdirSync(jsonDir, { recursive: true });
      }
      
      fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), 'utf8');
      console.log('Raw JSON output saved to:', jsonFile);
      
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