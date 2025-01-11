import { studentService } from './student.service';
import { UpdateStudentDto } from './dto/update.dto';
export declare class StudentController {
    private readonly StudentService;
    constructor(StudentService: studentService);
    update(id: string, updateStdDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
}
