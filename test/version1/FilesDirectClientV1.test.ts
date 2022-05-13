import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { FilesMemoryPersistence } from 'service-files-node';
import { FilesController } from 'service-files-node';
import { FilesDirectClientV1 } from '../../src/version1/FilesDirectClientV1';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';

suite('FilesDirectClientV1', ()=> {
    let client: FilesDirectClientV1;
    let fixture: FilesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new FilesMemoryPersistence();
        let controller = new FilesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-files', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-files', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new FilesDirectClientV1();
        client.setReferences(references);

        fixture = new FilesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
