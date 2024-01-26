import { IsNumber, IsString } from "class-validator";


export class UserDto {
    @IsNumber()
    readonly Id: number;

    @IsString()
    readonly FirstName: string;

    @IsString()
    readonly LastName: string;

    @IsNumber()
    readonly Age: number;

    @IsString()
    readonly Sex: string;
}