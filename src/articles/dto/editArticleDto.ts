import { IsNotEmpty, IsOptional, IsString, } from "class-validator";

export class EditArticleDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly articleName: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly articleText: string;
}