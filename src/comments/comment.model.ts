import { Table, Column, Model, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Article } from "../articles/article.model";

interface CommentCreationAttrs {
    commentText: string;
    articleId: number;
}

@Table
export class Comment extends Model<Comment, CommentCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.TEXT, allowNull: false })
    commentText: string;

    @ForeignKey(() => Article)
    @Column
    articleId: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    @BelongsTo(() => Article)
    article: Article;
}