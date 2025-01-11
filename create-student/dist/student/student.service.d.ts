import { student } from "./student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create.dto";
export declare class studentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<student>);
    CreateStudent(CreateStudentDto: CreateStudentDto): Promise<CreateStudentDto & student>;
}
