"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderModel_1 = require("../models/orderModel");
let OrderRepository = class OrderRepository {
    async findAll() {
        return await orderModel_1.Order.findAll();
    }
    async findById(id) {
        return await orderModel_1.Order.findByPk(id);
    }
    async create(order) {
        return await orderModel_1.Order.create(order);
    }
    async update(id, order) {
        await orderModel_1.Order.update(order, { where: { id } });
        return await orderModel_1.Order.findByPk(id);
    }
    async delete(id) {
        await orderModel_1.Order.destroy({ where: { id } });
        return true;
    }
    async getByUserId(userId) {
        return await orderModel_1.Order.findAll({ where: { userId } });
    }
};
OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);
exports.default = OrderRepository;