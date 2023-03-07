import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/createArticleDto';
import { EditArticleDto } from './dto/editArticleDto';

@Controller('article')
export class ArticlesController {
    constructor(private articleService: ArticlesService) { }

    @Post()
    async CreateArticle(@Res() response, @Body() dto: CreateArticleDto) {
        const newArticle = await this.articleService.createArticle(dto)
        if (!newArticle) {
            throw new HttpException('article not created', HttpStatus.BAD_REQUEST)
        }
        return response.status(HttpStatus.CREATED).json(newArticle)
    }

    @Get(":id")
    async GetArticlebyId(@Res() response, @Param('id', ParseIntPipe) id: number) {
        const article = await this.articleService.getArticleById(id)
        if (!article) {
            throw new HttpException('article not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json(article)
    }

    @Get()
    async GetAllArticles(@Res() response) {
        const articles = await this.articleService.findAll()
        if (!articles || articles.length === 0) {
            throw new HttpException('articles not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json(articles)
    }

    @Patch(":id")
    async EditArticle(@Res() response, @Param("id", ParseIntPipe) id: number, @Body() dto: EditArticleDto) {
        const [rowsAffected] = await this.articleService.editArticleById(id, dto)
        if (!rowsAffected) {
            throw new HttpException('article not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json()
    }

    @Delete(":id")
    async DeleteArticle(@Res() response, @Param("id", ParseIntPipe) id: number) {
        const rowsAffected = await this.articleService.deleteArticleById(id);
        console.log(rowsAffected);
        if (!rowsAffected) {
            throw new HttpException('article not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json()
    }
}