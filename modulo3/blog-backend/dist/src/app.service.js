"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let AppService = class AppService {
    products = [
        {
            id: 1,
            name: 'Laptop HP',
            price: 850,
            stock: 10
        }
    ];
    userRepository;
    getHeath() {
        return {
            "status": "online",
            "service": "blog service api",
            "version": "0.0.1",
            "date": new Date()
        };
    }
    createProduct(product) {
        const newProduct = {
            ...product,
            id: Math.floor(Math.random() * 1000) + 1
        };
        this.products.push(newProduct);
        return {
            "id": newProduct.id,
            "name": newProduct.name,
            "price": newProduct.price,
            "stock": newProduct.stock
        };
    }
    async findAll(options) {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    findById(id) {
        return this.products
            .filter(product => product.id === Number(id));
    }
    update(id, updatedProduct) {
        const product = this.products.find(product => product.id === Number(id));
        if (!product) {
            return;
        }
        Object.assign(product, updatedProduct);
        return product;
    }
    deleteById(id) {
        const index = this.products
            .findIndex(product => product.id === Number(id));
        if (index === -1) {
            return;
        }
        const deletedProduct = this.products[index];
        this.products.splice(index, 1);
        return deletedProduct;
    }
    areaTriangulo(data) {
        const area = (data.base * data.altura) / 2;
        return {
            "base": data.base,
            "altura": data.altura,
            "areaTriangulo": area,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map