import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { studentService } from './student.service';
import { get } from 'http';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: studentService){

    }

   @Get()
   getAllData(){
    return this.StudentService.getAllData();
   }

   @Get(":id")
   getOneData(@Param("id") id:string){
    return this.StudentService.getOneData(+id);
   }
}
