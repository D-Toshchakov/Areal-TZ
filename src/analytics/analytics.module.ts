import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from '../comments/comment.model';
import { Article } from '../articles/article.model';
import { ArticlesService } from '../articles/articles.service';
import { CommentService } from '../comments/comments.service';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Article])],
  providers: [AnalyticsService, ArticlesService, CommentService],
  controllers: [AnalyticsController]
})
export class AnalyticsModule { }
