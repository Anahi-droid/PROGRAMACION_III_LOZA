"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const product_dto_1 = require("./product.dto");
let AppController = class AppController {
    appService;
    usersService;
    constructor(appService) {
        this.appService = appService;
    }
    getHeath() {
        return this.appService.getHeath();
    }
    createProduct(product) {
        return this.appService.createProduct(product);
    }
    findAll(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.usersService.findAll({ page, limit });
    }
    update(id, updatedProduct) {
        return this.appService.update(id, updatedProduct);
    }
    deleteById(id) {
        return this.appService.deleteById(id);
    }
    areaTriangulo(data) {
        return this.appService.areaTriangulo(data);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("/health"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHeath", null);
__decorate([
    (0, common_1.Post)("/products"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)("/products/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", product_dto_1.ProductDto)
], AppController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Post)("/area-triangulo"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "areaTriangulo", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map