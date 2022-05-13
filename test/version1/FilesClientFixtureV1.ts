const assert = require('chai').assert;

import { FileV1 } from '../../src/version1/FileV1';
import { IFilesClientV1 } from '../../src/version1/IFilesClientV1';

export class FilesClientFixtureV1 {
    private _client: IFilesClientV1;
    
    constructor(client: IFilesClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let file1: FileV1;

        // Create file
        let file = new FileV1(
            null, 'test', 'file-1.dat', 'Test file', '111'
        );

        file1 = await this._client.createFile(null, file);

        assert.isObject(file1);

        // Update file
        file1.name = 'new_file.dat';
        
        file = await this._client.updateFile(null, file1);

        assert.equal(file1.name, 'new_file.dat');

        // Get files
        let page = await this._client.getFilesByFilter(null, null, null);

        assert.lengthOf(page.data, 1);

        // Get groups
        let groupsPage = await this._client.getGroups(null, null);

        assert.lengthOf(groupsPage.data, 1);

        // Delete file
        await this._client.deleteFileById(null, file1.id);

        // Try to get deleted file
        file = await this._client.getFileById(null, file1.id);

        assert.isNull(file);
    }
}
