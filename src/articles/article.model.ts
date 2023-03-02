import { Table, Column, Model, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

interface ArticleCreationAttrs {
    articleName: string;
    articleText: string;
}

@Table
export class Article extends Model<Article, ArticleCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ allowNull: false })
    articleName: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    articleText: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}