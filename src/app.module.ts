import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Article } from './articles/article.model';
import { ArticlesModule } from './articles/articles.module';
import { Comment } from './comments/comment.model';
import { CommentsModule } from './comments/comments.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'areal',
    models: [Article, Comment],
    autoLoadModels: true,
  }),
    ArticlesModule,
    CommentsModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
