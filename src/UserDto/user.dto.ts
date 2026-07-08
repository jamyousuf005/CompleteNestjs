import { IsAlphanumeric, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserDto{
    @IsString()
    @IsNotEmpty({message:"Username required"})
    @MaxLength(20,{message : "username cannot be longer than 20 characters"})
    readonly name! : string;

    @IsAlphanumeric()
    @IsNotEmpty({message:"password required"})
    @MaxLength(8,{message:"password must not be longer than 8 characters"})
   readonly password! : string;

   readonly createdAt?:string;

}
