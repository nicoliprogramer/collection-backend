import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateEmployeeDto } from './dto/employee-create.dto';
 
@Injectable()
export class EmployeesService {
    constructor(private readonly prisma: PrismaService) {}

    async getEmployees() {
    try {
      const query = await this.prisma.$queryRaw`SELECT * FROM employees`;
    return{
      query
    }
    } catch (error) {
      throw error;
    }
  }

   async createEmployee(employee: CreateEmployeeDto) {
    try {
      const createEmployee = await this.prisma.$executeRaw`INSERT INTO employees(name, job, salary, hiring)
      VALUES(${employee.name}, ${employee.job}, ${employee.salary}, ${employee.hiring})`;
      return {
      statusCode: 201,
      createEmployee
    };
    } catch (error) {
      throw error;
    }
  }
}
