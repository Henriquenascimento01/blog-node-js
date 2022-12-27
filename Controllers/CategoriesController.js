import bodyParser from 'body-parser';

class CategoriesController {

    async index(req, res) {
        res.render('admin/categories/new');
    }

    async insert(req, res) {
        
    }
}

export default new CategoriesController;    