import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from '../articles/article.model';
import { Comment } from './comment.model';
import { DtoWithId } from './dto/createCommentDto';
import { EditCommentDto } from './dto/editCommentDto';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment)
        private commentModel: typeof Comment,
        @InjectModel(Article)
        private articleModel: typeof Article
    ) { }

    async createComment(dto: DtoWithId) {
        const article = this.articleModel.findByPk(dto.articleId)
        if (!article) {
            throw new HttpException('article with this id not found', HttpStatus.NOT_FOUND)
        }

        const comment = await this.commentModel.create({ ...dto })

        return comment
    }

    async findCommentsByArticleId(articleId: number) {
        const article = this.articleModel.findByPk(articleId)
        if (!article) {
            throw new HttpException('article with this id not found', HttpStatus.NOT_FOUND)
        }

        const comments = this.commentModel.findAll({
            where: {
                articleId: articleId
            }
        })

        return comments
    }

    async findCommentById(articleId: number, commentId: number) {
        const article = this.articleModel.findByPk(articleId)
        if (!article) {
            throw new HttpException('article with this id not found', HttpStatus.NOT_FOUND)
        }

        const comment = this.commentModel.findByPk(commentId)

        return comment
    }

    async patchCommentById(articleId: number, commentId: number, dto: EditCommentDto) {
        const article = this.articleModel.findByPk(articleId)
        if (!article) {
            throw new HttpException('article with this id not found', HttpStatus.NOT_FOUND)
        }

        const rowsAffected = await this.commentModel.update({ ...dto }, {
            where: {
                id: commentId
            }
        })
        return rowsAffected;
    }

    async deleteCommentById(articleId: number, commentId: number) {
        const article = this.articleModel.findByPk(articleId)
        if (!article) {
            throw new HttpException('article with this id not found', HttpStatus.NOT_FOUND)
        }

        const rowsAffected = await this.commentModel.destroy({
            where:
                { id: commentId }
            })
        return rowsAffected
    }
}


