import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from '../comments/comment.model';
import { Op } from 'sequelize';

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectModel(Comment)
        private commentModel: typeof Comment,
    ) { }

    getCommentsByTimestamp(dateFrom: Date, dateTo: Date) {
        const comments = this.commentModel.findAll({
            where: {
                updatedAt: {
                    [Op.between]: [dateFrom, dateTo]
                }
            },
            order: ['articleId']
        })
        return comments
    }
}
