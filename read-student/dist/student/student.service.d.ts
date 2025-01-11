import { student } from "./student.entity";
import { Repository } from "typeorm";
export declare class studentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<student>);
    removeStudent(id: number): Promise<student>;
}
