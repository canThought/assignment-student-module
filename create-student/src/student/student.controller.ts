import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create.dto';
import { studentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: studentService){

    }

    @Post()
    createstudent(@Body() CreateStudentDto: CreateStudentDto){
        return this.StudentService.CreateStudent(CreateStudentDto);
    }
}
