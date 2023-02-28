import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from '../sequelize/models/article.model';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectModel(Article)
        private articleModel: typeof Article
    ) {}

    async createArticle(article: Article): Promise<Article> {
        return this.articleModel.create({...article});
    }

    async findAll(): Promise<Article[]> {
        return this.articleModel.findAll();
    }
}
