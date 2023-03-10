import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { QueryDto } from './dto/queryDto';

@Controller('analytic')
export class AnalyticsController {
    constructor(
        private analyticService: AnalyticsService
    ) { }

    // Time format 2023-03-09T13:20:01.854Z
    @Get('comments')
    async GetCommentsByTimestamp(@Query() dates: QueryDto) {
        return this.analyticService.getCommentsByTimestamp(dates.dateFrom, dates.dateTo)
    }
}
