import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { FilesMemoryPersistence } from 'service-files-node';
import { FilesController } from 'service-files-node';
import { FilesHttpServiceV1 } from 'service-files-node';
import { FilesHttpClientV1 } from '../../src/version1/FilesHttpClientV1';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('FilesHttpClientV1', ()=> {
    let service: FilesHttpServiceV1;
    let client: FilesHttpClientV1;
    let fixture: FilesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new FilesMemoryPersistence();
        let controller = new FilesController();

        service = new FilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-files', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-files', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-files', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new FilesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new FilesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
