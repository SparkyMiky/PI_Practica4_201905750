import {Request, Response} from 'express';

import pool from '../database'

class CursosController{

    public async list (req: Request, res: Response){
        console.log('Listando')
        await pool.query('SELECT * FROM cursos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        const { id } = req.params;
        await pool.query('SELECT * FROM cursos WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }

}

export const cursosController = new CursosController(); 
export default cursosController;