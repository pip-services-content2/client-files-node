import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';

export class FilesLambdaClientV1 extends CommandableLambdaClient implements IFilesClientV1 {

    constructor(config?: any) {
        super('files');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getGroups(correlationId: string, paging: PagingParams): Promise<DataPage<string>> {
        let timing = this.instrument(correlationId, 'files.get_groups');

        try {
            return await this.callCommand(
                'get_groups',
                correlationId,
                {
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
        
    public async getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<FileV1>> {
        let timing = this.instrument(correlationId, 'files.get_files_by_filter');

        try {
            return await this.callCommand(
                'get_files_by_filter',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getFilesByIds(correlationId: string, fileIds: string[]): Promise<FileV1[]> {
        let timing = this.instrument(correlationId, 'files.get_files_by_ids');

        try {
            return await this.callCommand(
                'get_files_by_ids',
                correlationId,
                {
                    file_ids: fileIds
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getFileById(correlationId: string, fileId: string): Promise<FileV1> {
        let timing = this.instrument(correlationId, 'files.get_file_by_id');

        try {
            return await this.callCommand(
                'get_file_by_id',
                correlationId,
                {
                    file_id: fileId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createFile(correlationId: string, file: FileV1): Promise<FileV1> {
        let timing = this.instrument(correlationId, 'files.create_file');

        try {
            return await this.callCommand(
                'create_file',
                correlationId,
                {
                    file: file
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateFile(correlationId: string, file: FileV1): Promise<FileV1> {
        let timing = this.instrument(correlationId, 'files.update_file');

        try {
            return await this.callCommand(
                'update_file',
                correlationId,
                {
                    file: file
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteFileById(correlationId: string, fileId: string): Promise<FileV1> { 
        let timing = this.instrument(correlationId, 'files.delete_file_by_id');

        try {
            return await this.callCommand(
                'delete_file_by_id',
                correlationId,
                {
                    file_id: fileId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
