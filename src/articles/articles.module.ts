import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './article.model';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
    imports: [SequelizeModule.forFeature([Article])],
    providers: [ArticlesService],
    controllers: [ArticlesController]
})
export class ArticlesModule {}
