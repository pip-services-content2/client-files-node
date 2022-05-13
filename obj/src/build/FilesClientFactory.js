"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const FilesNullClientV1_1 = require("../version1/FilesNullClientV1");
const FilesDirectClientV1_1 = require("../version1/FilesDirectClientV1");
const FilesHttpClientV1_1 = require("../version1/FilesHttpClientV1");
class FilesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(FilesClientFactory.NullClientV1Descriptor, FilesNullClientV1_1.FilesNullClientV1);
        this.registerAsType(FilesClientFactory.DirectClientV1Descriptor, FilesDirectClientV1_1.FilesDirectClientV1);
        this.registerAsType(FilesClientFactory.HttpClientV1Descriptor, FilesHttpClientV1_1.FilesHttpClientV1);
    }
}
exports.FilesClientFactory = FilesClientFactory;
FilesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-files', 'factory', 'default', 'default', '1.0');
FilesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-files', 'client', 'null', 'default', '1.0');
FilesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-files', 'client', 'direct', 'default', '1.0');
FilesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-files', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=FilesClientFactory.js.map