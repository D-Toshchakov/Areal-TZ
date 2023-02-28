import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table
export class Article extends Model {
    // @PrimaryKey
    // @Column
    // ArticleId: string;

    @Column
    articleName: string;

    @Column
    articleText: string;
 
    @CreatedAt
    @Column
    createdAt: Date;
  
    @UpdatedAt
    @Column
    updatedAt: Date;
}