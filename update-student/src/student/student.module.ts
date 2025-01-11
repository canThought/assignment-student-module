import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';
import { studentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  providers: [studentService],
  controllers: [StudentController]
})
export class StudentModule {}
