import { Sequelize } from "sequelize";
import connection from "../config/default.js";
import Category from "./Category.js";

const Article = connection.define('articles', {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article);
Article.belongsTo(Category);

export default Article; 