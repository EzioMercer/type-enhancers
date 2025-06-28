import fs from 'fs/promises';

const utilsDir = 'utils';
const utilsIndexPath = `${utilsDir}/index.d.ts`;

await fs.writeFile(utilsIndexPath, '');

const filesNames = await fs.readdir(utilsDir);

for (let i = 1; i < filesNames.length; ++i) {
    const utilName = filesNames[i]!.split('.d.ts')[0]!;

    await fs.appendFile(utilsIndexPath, `export type { ${utilName} } from './${utilName}';\n`);
}
