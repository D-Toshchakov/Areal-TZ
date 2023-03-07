import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';
import { EditCommentDto } from './dto/editCommentDto';

@Controller('article/:artId/comment')
export class CommentsController {
    constructor(private commentService: CommentService) { }

    @Post()
    async CreateComment(
        @Res() response,
        @Body() dto: CreateCommentDto,
        @Param('artId', ParseIntPipe) artId: number,
    ) {
        const dtoWithId = { commentText: dto.commentText, articleId: artId }
        const comment = await this.commentService.createComment(dtoWithId);

        return response.status(HttpStatus.OK).json(comment)
    }

    @Get()
    async GetAllComments(
        @Res() response,
        @Param('artId', ParseIntPipe) artId: number
    ) {
        const comments = await this.commentService.findCommentsByArticleId(artId);
        if (!comments) {
            throw new HttpException('comments not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json(comments)
    }

    @Get(":commId")
    async GetCommentById(
        @Res() response,
        @Param('artId', ParseIntPipe) artId: number,
        @Param('commId', ParseIntPipe) commId: number,
    ) {
        const comment = await this.commentService.findCommentById(artId, commId);
        if (!comment) {
            throw new HttpException('comments not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json(comment)
    }

    @Patch(":commId")
    async PatchCommentById(
        @Res() response,
        @Body() dto: EditCommentDto,
        @Param('artId', ParseIntPipe) artId: number,
        @Param('commId', ParseIntPipe) commId: number,
    ) {
        const [rowsAffected] = await this.commentService.patchCommentById(artId, commId, dto)
        if (!rowsAffected) {
            throw new HttpException('commentary not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json()
    }

    @Delete(":commId")
    async DeleteComment(
        @Res() response,
        @Param("artId", ParseIntPipe) artId: number,
        @Param('commId', ParseIntPipe) commId: number,
    ) {
        const rowsAffected = await this.commentService.deleteCommentById(artId, commId);
        if (!rowsAffected) {
            throw new HttpException('commentary not found', HttpStatus.NOT_FOUND)
        }
        return response.status(HttpStatus.OK).json()
    }
}
