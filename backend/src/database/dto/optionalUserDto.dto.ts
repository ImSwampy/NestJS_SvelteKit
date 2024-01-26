import { PartialType } from "@nestjs/mapped-types";
import { UserDto } from "./userDto.dto";

export class optionalUserDto extends PartialType(UserDto) { }