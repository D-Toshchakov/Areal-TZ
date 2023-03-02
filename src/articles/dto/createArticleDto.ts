import { IsNotEmpty, IsString, } from "class-validator";

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    readonly articleName: string;

    @IsString()
    @IsNotEmpty()
    readonly articleText: string;
}