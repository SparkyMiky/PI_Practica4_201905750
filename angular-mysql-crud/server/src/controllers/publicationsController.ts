import {Request, Response} from 'express';

import pool from '../database'

class PublicationsController{

    public async list (req: Request, res: Response){
        await pool.query('SELECT * FROM publications', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        const { id } = req.params;
        await pool.query('SELECT * FROM publications WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json({text: 'Publication found'});
        });
    }

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO publications set ?', [req.body]); //Agrega los datos obtenidos en la tabla
        res.json({message:'Publication created'})
    }

    public update(req: Request, res:Response){
        res.json('Updating a publication')
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM  publications WHERE id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json({text: 'Publication found'});
        })
    }

}

export const publicationsController = new PublicationsController(); 
export default publicationsController;