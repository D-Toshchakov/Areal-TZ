import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Http2ServerRequest } from 'http2';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/createArticleDto';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectModel(Article)
        private articleModel: typeof Article
    ) { }

    async createArticle(dto: CreateArticleDto): Promise<Article> {
        const article = await this.articleModel.create({ ...dto });
        return article;
    }

    async getArticleById(id: number): Promise<Article> {
        const article = this.articleModel.findByPk(id)
        return article
    }

    async findAll(): Promise<Article[]> {
        const articles = this.articleModel.findAll();
        return articles
    }
}
