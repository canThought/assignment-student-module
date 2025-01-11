import { studentService } from './student.service';
export declare class StudentController {
    private readonly StudentService;
    constructor(StudentService: studentService);
    deleteStudent(id: string): Promise<import("./student.entity").student>;
}
