import CategoryServices from '../services/CategoryServices.js';
class CategoriesController {

    async index(req, res) {
        res.render('admin/categories/new');
    }

    async insert(req, res) {

        console.log(req.body);
        const title = req.body;

        if (!title) {
            return res.redirect('/');
        }

        const response = await CategoryServices.create(title);

        if (!response) {
            res.status(400).json({ status: false, message: 'Erro ao criar categoria' })
        }

        return res.redirect('admin/categories/new');

    }
}

export default new CategoriesController;    