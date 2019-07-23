import { IsString, IsNumber, IsDateString, ValidateNested, IsOptional, ArrayMinSize, IsDefined, IsIn, IsNotEmpty, Min } from "class-validator";
export class CreatePersonDto {
    @IsOptional()
    @IsString()
    readonly _id?: string; // mongodb id auto generated
    readonly firstName: string;
    readonly lastName: string;
}
