import { Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { student } from "./student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create.dto";

export class studentService{
    constructor(
        @InjectRepository(student)
        private readonly studentRepository : Repository<student>
    ){}
    async CreateStudent(CreateStudentDto : CreateStudentDto){
        return await this.studentRepository.save(CreateStudentDto);
    } 
}