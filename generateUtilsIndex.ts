import fs from 'fs/promises';

const utilsDir = 'utils';
const utilsIndexPath = `${utilsDir}/index.d.ts`;

const filesNames = await fs.readdir(utilsDir);

await fs.writeFile(utilsIndexPath, '');

for (const fileName of filesNames) {
    if (fileName === 'index.d.ts') continue;

    const utilName = fileName.split('.d.ts')[0]!;

    await fs.appendFile(utilsIndexPath, `export type { ${utilName} } from './${utilName}';\n`);
}
