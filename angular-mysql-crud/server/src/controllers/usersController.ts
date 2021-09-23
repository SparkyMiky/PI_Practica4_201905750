import {Request, Response} from 'express';

import pool from '../databaUsers'

class UsersController{

    public async list (req: Request, res: Response){
        await pool.query('SELECT * FROM users', function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        const { carne } = req.params;
        await pool.query('SELECT * FROM users WHERE carne = ?', [carne], function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }
    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO users set ?', [req.body]); //Agrega los datos obtenidos en la tabla
        res.json({message:'User created'})
    }

    public async update(req: Request, res:Response){
        const { carne } = req.params;
        const { password } = req.body;
        const { correo } = req.body;
        await pool.query("UPDATE users SET password = ? WHERE carne = ? && correo = ? ",[password,carne,correo],function(err, result, fields){
            if (err) throw err;
            console.log(result);
            res.json({text: 'User updated'});
        });
    }

    public delete(req: Request, res: Response){
        res.json('Eliminando user')
    }

}

export const usersController = new UsersController(); 
export default usersController;
