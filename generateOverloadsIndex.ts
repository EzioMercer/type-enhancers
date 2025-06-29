import type { Dirent } from 'fs';
import fs from 'fs/promises';

const generateIndexForOverloadFolder = async (folderPath: string) => {
    const filesAndFolders = await fs.readdir(folderPath, { withFileTypes: true });

    const { files, folders } = filesAndFolders.reduce((result, dirent) => {
        if (dirent.isFile() && !dirent.name.startsWith('index')) result.files.push(dirent);
        else if (dirent.isDirectory()) result.folders.push(dirent);

        return result;
    }, {
        files: [],
        folders: [],
    } as {
        files: Dirent[];
        folders: Dirent[];
    });

    const indexPath = `${folderPath}/index.d.ts`;

    await fs.writeFile(indexPath, '');

    for (const folder of folders) {
        await fs.appendFile(indexPath, `import './${folder.name}';\n`);
    }

    for (const file of files) {
        await fs.appendFile(indexPath, `import './${file.name.split('.d.ts')[0]}';\n`);
    }

    folders.forEach((folder) => generateIndexForOverloadFolder(`${folderPath}/${folder.name}`));
};

generateIndexForOverloadFolder('overloads');
