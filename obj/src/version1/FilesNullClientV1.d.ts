import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';
export declare class FilesNullClientV1 implements IFilesClientV1 {
    constructor(config?: any);
    getFileById(correlationId: string, fileId: string): Promise<FileV1>;
    deleteFileById(correlationId: string, fileId: string): Promise<FileV1>;
    getGroups(correlationId: string, paging: PagingParams): Promise<DataPage<string>>;
    getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<FileV1>>;
    getFilesByIds(correlationId: string, fileIds: string[]): Promise<FileV1[]>;
    createFile(correlationId: string, file: FileV1): Promise<FileV1>;
    updateFile(correlationId: string, file: FileV1): Promise<FileV1>;
}
