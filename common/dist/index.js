"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInput = exports.CreatePostInput = exports.SigninInput = exports.SignupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    name: zod_1.default.string().optional(),
    password: zod_1.default.string().min(6),
});
exports.SigninInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.CreatePostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.boolean().default(false),
});
exports.UpdatePostInput = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
    published: zod_1.default.boolean().optional(),
});
