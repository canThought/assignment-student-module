import { student } from "./student.entity";
import { Repository } from "typeorm";
import { UpdateStudentDto } from "./dto/update.dto";
export declare class studentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<student>);
    updateStudent(id: number, updatestudDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
}
