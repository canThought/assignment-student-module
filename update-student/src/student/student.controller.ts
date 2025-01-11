import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { studentService } from './student.service';
import { UpdateStudentDto } from './dto/update.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: studentService){

    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateStdDto:UpdateStudentDto){
        return this.StudentService.updateStudent(+id, updateStdDto);
    }
}
