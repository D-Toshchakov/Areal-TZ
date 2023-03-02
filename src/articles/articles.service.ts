import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Http2ServerRequest } from 'http2';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/createArticleDto';
import { EditArticleDto } from './dto/editArticleDto';

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
        const article = await this.articleModel.findByPk(id)
        return article
    }

    async findAll(): Promise<Article[]> {
        const articles = await this.articleModel.findAll();
        return articles
    }

    async editArticleById(articleId: number, dto: EditArticleDto): Promise<[affectedCount: number]> {
        const rowsAffected = await this.articleModel.update({ ...dto }, {
            where: {
                id: articleId
            }
        })
        return rowsAffected;
    }

    async deleteArticleById(articleId: number) {
        const rowsAffected = await this.articleModel.destroy({
            where: {
                id: articleId
            }
        })
        return rowsAffected;
    }
}
