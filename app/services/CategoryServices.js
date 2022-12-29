import Category from "../models/Category.js";
import slugify from "slugify";

class CategoryServices {

    async create(title) {

        try {

            const category = await Category.create({
                title: title,
                slug: slugify(title)
            });

            return category;

        } catch (error) {

            console.log(error)
            return JSON.stringify(error);
        }
    }
}

export default new CategoryServices; 