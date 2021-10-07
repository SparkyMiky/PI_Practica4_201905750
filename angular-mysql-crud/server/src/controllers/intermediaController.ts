import {Request, Response} from 'express';

import pool from '../database'

class IntermediaController{

    public async list (req: Request, res: Response){
        await pool.query('SELECT * FROM intermedia', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        let id_carne  = req.params.carne;
        await pool.query('SELECT * FROM intermedia WHERE id_carne = ?', [id_carne], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }

    public async create(req: Request, res: Response){
        delete req.body.id;
        await pool.query('INSERT INTO intermedia set ?', [req.body]); //Agrega los datos obtenidos en la tabla
        res.json({message:'cursoAsignado'})
    }

    public update(req: Request, res:Response){
        res.json('Updating a publication')
    }

    public async delete(req: Request, res: Response){
        const { id_carne } = req.params;
        const { id_curso} = req.params;
        await pool.query('DELETE FROM  intermedia WHERE id_carne = ? && id_curso = ?',[id_carne,id_curso], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json({text: 'Publication found'});
        })
    }

}

export const intermediaController = new IntermediaController(); 
export default intermediaController;