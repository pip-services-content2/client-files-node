import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';

export class FilesNullClientV1 implements IFilesClientV1 {
    constructor(config?: any) {}

    public async getFileById(correlationId: string, fileId: string): Promise<FileV1> {
        return null;
    }
    
    public async deleteFileById(correlationId: string, fileId: string): Promise<FileV1> {
        return null;
    }
        
    public async getGroups(correlationId: string, paging: PagingParams): Promise<DataPage<string>> {
        return new DataPage<string>([], 0);
    }

    public async getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<FileV1>> {
        return new DataPage<FileV1>([], 0);
    }

    public async getFilesByIds(correlationId: string, fileIds: string[]): Promise<FileV1[]> {
        return [];
    }

    public async createFile(correlationId: string, file: FileV1): Promise<FileV1> {
        return file;
    }

    public async updateFile(correlationId: string, file: FileV1): Promise<FileV1> {
        return file;
    }

}
