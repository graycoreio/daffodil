import packageJson from '../../../../../../../../package.json';
import {
  DaffioTerminalLine,
  DaffioTerminalSegment,
  DaffioTerminalStep,
} from '../terminal-animation/terminal-step.type';

// The repo's root package.json is bumped on every release, so it always holds the latest Daffodil version.
const VERSION = packageJson.version;

const COMMAND = 'npx ng add @daffodil/commerce';
const DRIVERS = ['Magento', 'Shopify', 'In-Memory (for testing)', 'Demo (Swapping between drivers)'];

const line = (...segments: DaffioTerminalSegment[]): DaffioTerminalLine => ({ segments });
const blank = (): DaffioTerminalLine => line({ text: '' });
const check = (text: string, answer?: string): DaffioTerminalLine => line(
  { text: '✔ ', tone: 'success' },
  { text },
  ...(answer ? [{ text: ` ${answer}`, tone: 'accent' }] satisfies DaffioTerminalSegment[] : []),
);
const detail = (text: string): DaffioTerminalLine => line({ text: `  › ${text}` });
const question = (text: string, typed = ''): DaffioTerminalLine => ({
  ...line({ text: `? ${text}${typed}` }),
  cursor: !typed,
});
const file = (action: 'CREATE' | 'UPDATE', path: string, bytes: number): DaffioTerminalLine =>
  line({ text: `${action} ${path} (${bytes} bytes)`, tone: 'muted' });

const driverMenu = (selected: number): DaffioTerminalLine[] =>
  DRIVERS.map((driver, i) => i === selected
    ? line({ text: `❯ ${driver}` })
    : line({ text: `  ${driver}`, tone: 'muted' }));

const moveDriverCursor = (selected: number): DaffioTerminalStep => ({
  delay: 500,
  remove: DRIVERS.length,
  add: driverMenu(selected),
});

const writeFiles = (files: [action: 'CREATE' | 'UPDATE', path: string, bytes: number][]): DaffioTerminalStep[] =>
  files.map(([action, path, bytes]) => ({ delay: 60, add: [file(action, path, bytes)]}));

/**
 * The terminal session shown when installing `@daffodil/commerce`.
 */
export const COMMERCE_INSTALL_SCRIPT: DaffioTerminalStep[] = [
  { delay: 500, add: [{ ...line({ text: COMMAND }), typed: true }]},
  { delay: 1400, add: [check('Determining Package Manager'), detail('Using package manager: npm')]},
  { delay: 700, add: [check('Searching for compatible package version'), detail(`Found compatible package version: @daffodil/commerce@${VERSION}.`)]},
  { delay: 600, add: [check('Loading package information from registry')]},
  { delay: 600, add: [check('Confirming installation')]},
  { delay: 300, add: [
    blank(),
    line({ text: `The package @daffodil/commerce@${VERSION} will be installed and executed.` }),
    question('Would you like to proceed? (Y/n) '),
  ]},
  { delay: 900, remove: 1, add: [question('Would you like to proceed? (Y/n) ', 'Y')]},
  { delay: 500, remove: 3, add: [check('Installing package')]},
  { delay: 500, add: [blank(), question('Is this a new Angular project? (Y/n) ')]},
  { delay: 900, remove: 1, add: [question('Is this a new Angular project? (Y/n) ', 'Y')]},
  { delay: 400, remove: 1, add: [check('Is this a new Angular project?', 'Yes')]},
  { delay: 500, add: [blank(), question('Which driver do you want to use?'), ...driverMenu(0)]},
  moveDriverCursor(1),
  moveDriverCursor(0),
  { delay: 600, remove: DRIVERS.length + 1, add: [check('Which driver do you want to use?', DRIVERS[0])]},
  ...writeFiles([
    ['CREATE', 'src/app/daff/navigation/components/navigation.component.ts', 8143],
    ['CREATE', 'src/app/daff/navigation/components/state/navigation.state.ts', 1276],
    ['CREATE', 'src/app/daff/pages/home/home.component.ts', 3072],
    ['CREATE', 'src/app/daff/pages/not-found/not-found.component.ts', 4193],
    ['CREATE', 'src/app/daff/product/components/product-list/product-list.component.ts', 7245],
    ['CREATE', 'src/app/daff/product/components/product-list/state/product-list.state.ts', 1766],
    ['CREATE', 'src/app/daff/product/components/product-page/product-page.component.ts', 6249],
    ['CREATE', 'src/app/daff/product/resolvers/product.resolver.ts', 913],
    ['UPDATE', 'package.json', 1606],
    ['UPDATE', 'src/app/app.config.ts', 1215],
    ['UPDATE', 'src/app/app.routes.ts', 731],
    ['UPDATE', 'src/app/app.html', 781],
    ['UPDATE', 'src/app/app.ts', 487],
  ]),
  { delay: 150, add: [{ ...line({ text: 'Installing packages (npm)...' }), spinner: true }]},
  { delay: 1200, remove: 1, add: [check('Packages installed successfully.')]},
];
