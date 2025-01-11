import { Inject, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { student } from "./student.entity";
import { Repository } from "typeorm";

export class studentService{
    constructor(
        @InjectRepository(student)
        private readonly studentRepository : Repository<student>
    ){}
    async removeStudent(id: number){
        const student = await this.studentRepository.findOneBy({id});
        if(!student){
            throw new NotFoundException('Student Not Found');
        }
        return await this.studentRepository.remove(student);
    }
}