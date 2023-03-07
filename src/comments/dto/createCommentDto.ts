import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    readonly commentText: string;
}

export class DtoWithId {
    @IsString()
    @IsNotEmpty()
    readonly commentText: string;

    @IsOptional()
    readonly articleId: number;
}