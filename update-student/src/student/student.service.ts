import { Inject, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { student } from "./student.entity";
import { Repository } from "typeorm";
import { UpdateStudentDto } from "./dto/update.dto";

export class studentService{
    constructor(
        @InjectRepository(student)
        private readonly studentRepository : Repository<student>
    ){}
    async updateStudent(id: number, updatestudDto: UpdateStudentDto){
        const student = this.studentRepository.findOneBy({id});
        if(!student){
            throw new NotFoundException('Student Not Found');
        }
        return this.studentRepository.update(id, updatestudDto);
    }
}