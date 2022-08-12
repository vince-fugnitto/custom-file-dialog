import { ContainerModule } from '@theia/core/shared/inversify';
import { FileDialogService } from '@theia/filesystem/lib/browser/file-dialog';
import { CustomFileDialogService } from './custom-file-dialog-service';

export default new ContainerModule((bind, _unbind, _isBound, rebind) => {
    bind(CustomFileDialogService).toSelf().inSingletonScope();
    rebind(FileDialogService).toService(CustomFileDialogService);
});
