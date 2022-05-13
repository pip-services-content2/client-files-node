import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IFilesClientV1 } from './IFilesClientV1';
//import { IFilesController } from 'service-files-node';
import { FileV1 } from './FileV1';

export class FilesDirectClientV1 extends DirectClient<any> implements IFilesClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-files", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getGroups(correlationId: string, paging: PagingParams): Promise<DataPage<string>> {
        let timing = this.instrument(correlationId, 'files.get_groups');

        try {
            return await this._controller.getGroups(correlationId, paging);
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
            return await this._controller.getFilesByFilter(correlationId, filter, paging);
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
            return await this._controller.getFilesByIds(correlationId, fileIds);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getFileById(correlationId: string, fileId: string): Promise<FileV1> {
        let timing = this.instrument(correlationId, 'files.get_files_by_ids');

        try {
            return await this._controller.getFileById(correlationId, fileId);
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
            return await this._controller.createFile(correlationId, file);
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
            return await this._controller.updateFile(correlationId, file);
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
            return await this._controller.deleteFileById(correlationId, fileId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}