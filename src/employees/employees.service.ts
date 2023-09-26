import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

 
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
}
