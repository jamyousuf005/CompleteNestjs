import { IsAlphanumeric, IsDateString, IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";


export enum Country {
    IND = 'IND',
    UK = 'UK',
    USA = 'USA',
    AUS = 'AUS'
}

export class AuthDto {



    //@IsEmpty() will be kept empty
    @IsString()
    @Length(3, 20)  //input length
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(8, {
        message: "password is too short please make length of 8 chars"
    })
    @MaxLength(15)
    password: string;

    @IsEnum(Country, {
        message: "country must be from [$constraint1], not $value"
    })
    country: Country;

    @IsDateString()
    dob: Date;

    @IsOptional()
    @IsString()
    @Matches(/^[0-9]{10,11}$/,{                    //regex
        message:"Phone number must be exactly 10 or 11 digits"
    })
    phone: string;

}