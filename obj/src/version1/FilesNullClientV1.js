"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesNullClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class FilesNullClientV1 {
    constructor(config) { }
    getFileById(correlationId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteFileById(correlationId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getGroups(correlationId, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return new pip_services3_commons_nodex_1.DataPage([], 0);
        });
    }
    getFilesByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return new pip_services3_commons_nodex_1.DataPage([], 0);
        });
    }
    getFilesByIds(correlationId, fileIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    createFile(correlationId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            return file;
        });
    }
    updateFile(correlationId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            return file;
        });
    }
}
exports.FilesNullClientV1 = FilesNullClientV1;
//# sourceMappingURL=FilesNullClientV1.js.map