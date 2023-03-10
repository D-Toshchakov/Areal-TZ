import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsController } from './comments.controller';
import { CommentService } from './comments.service';
import { Comment } from './comment.model';
import { Article } from '../articles/article.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Article])],
  controllers: [CommentsController],
  providers: [CommentService]
})
export class CommentsModule {}
