import { injectable } from '@theia/core/shared/inversify';
import { DefaultFileDialogService } from '@theia/filesystem/lib/browser/file-dialog';
import { DirNode } from '@theia/filesystem/lib/browser/file-tree';
import { FileStat } from '@theia/filesystem/lib/common/files';

@injectable()
export class CustomFileDialogService extends DefaultFileDialogService {

    protected async getRootNode(folderToOpen?: FileStat): Promise<DirNode | undefined> {
        console.log('custom getRootNode called.');
        return;
    }
}