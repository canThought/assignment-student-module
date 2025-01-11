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
exports.studentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("typeorm");
let studentService = class studentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async removeStudent(id) {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student) {
            throw new common_1.NotFoundException('Student Not Found');
        }
        return await this.studentRepository.remove(student);
    }
};
exports.studentService = studentService;
exports.studentService = studentService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], studentService);
//# sourceMappingURL=student.service.js.map