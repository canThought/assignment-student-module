import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { studentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: studentService){

    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string){
        return this.StudentService.removeStudent(+id);
    }
}
