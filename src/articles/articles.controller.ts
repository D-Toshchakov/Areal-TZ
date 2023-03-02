import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/createArticleDto';

@Controller('article')
export class ArticlesController {
    constructor(private articleService: ArticlesService) {}

    @Post()
    async CreateArticle(@Res() response, @Body() dto: CreateArticleDto) {
        const newArticle = await this.articleService.createArticle(dto)
        if (!newArticle){
            throw new HttpException('article not created', HttpStatus.BAD_REQUEST)
        }
        return response.status(HttpStatus.CREATED).json(newArticle)
    }

    @Get(":id")
    async GetArticlebyId(@Res() response, @Param('id', ParseIntPipe) id: number) {
        const article = await this.articleService.getArticleById(id)
        if (!article) {
            throw new HttpException('record not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json(article)
    }
}