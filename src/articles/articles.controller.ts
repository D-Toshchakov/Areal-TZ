import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Article } from 'src/sequelize/models/article.model';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/createArticleDto';

@Controller('articles')
export class ArticlesController {
    constructor(private articleService: ArticlesService) {}

    @Post()
    async CreateArticle(@Res() response, @Body() article: Article) {
        const newArticle = await this.articleService.createArticle(article)
        return response.status(HttpStatus.CREATED).json({newArticle})
    }
}