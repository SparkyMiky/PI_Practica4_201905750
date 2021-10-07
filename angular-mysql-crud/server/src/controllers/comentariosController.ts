import {Request, Response} from 'express';

import pool from '../database'

class ComentaiosController{

    public async list (req: Request, res: Response){
        await pool.query('SELECT * FROM comentarios', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        console.log('Pidiendo comentarios a bd')
        let id_publicacion = req.params.publicacion;
        await pool.query('SELECT * FROM comentarios WHERE id_publicacion = ?', [id_publicacion], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create(req: Request, res: Response){
        console.log('tratando de crear')
        await pool.query('INSERT INTO comentarios set ?', [req.body]); //Agrega los datos obtenidos en la tabla
        res.json({message:'Comment created created'})
    }

    public update(req: Request, res:Response){
        res.json('Updating a publication')
    }

    public async delete(req: Request, res: Response){
        let id_carne  = req.params.carne;
        let id_publicacion  = req.params.publicacion;
        await pool.query('DELETE FROM  comentarios WHERE id_carne = ? && id_publicacion = ?', [id_carne, id_publicacion], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        })
    }

}

export const comentariosController = new ComentaiosController(); 
export default comentariosController;