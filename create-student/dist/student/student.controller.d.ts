import { CreateStudentDto } from './dto/create.dto';
import { studentService } from './student.service';
export declare class StudentController {
    private readonly StudentService;
    constructor(StudentService: studentService);
    createstudent(CreateStudentDto: CreateStudentDto): Promise<CreateStudentDto & import("./student.entity").student>;
}
