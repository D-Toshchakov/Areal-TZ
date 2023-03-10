import { Transform } from "class-transformer";
import { IsDate } from "class-validator";

export class QueryDto {
    @Transform(({ value }) => new Date(value))
    @IsDate()
    dateFrom: Date;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    dateTo: Date;
}
