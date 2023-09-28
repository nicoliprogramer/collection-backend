import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/employee-create.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService){}

    @Get('')
    async getAllEmployees() {
    const todos = await this.employeesService.getEmployees();
    return todos
    }

    @Post('create')
    async createEmployee(@Body() employee: CreateEmployeeDto) {
    return await this.employeesService.createEmployee(employee)
    }

}
