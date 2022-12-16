import { db } from '../../db'

export default async function handler (req, res) {

    const body = JSON.parse(req.body);

    const create = await db.recipe.create({
        data: {
            title: body.title,
            ingredients: body.ingredients,
            description: body.description,
            type: body.type
        }
    });

    res.send('success')
}