import {IsNotEmpty, IsString, IsInt} from 'class-validator'


export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsString()
    job:string;

    @IsNotEmpty()
    @IsInt()
    salary:number;

    @IsNotEmpty()
    @IsString()
    hiring:string;
}