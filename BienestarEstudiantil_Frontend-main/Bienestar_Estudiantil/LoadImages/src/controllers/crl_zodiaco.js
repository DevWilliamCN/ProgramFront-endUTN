// Goals: Declare all methods that will be used in the routes
import {getConnection} from '../database/database';

// Retrieves all zodiac signs data
const getZodiaco = async (req, res) => {
    try{
        const conex = await getConnection();
        const result = await conex.query('select * from signos');
        res.status(200).json({
            "status_code": 200,
            "status_message": "OK",
            "content":result[0]});
    }catch (error) {
        res.status(500).json({
            "status_code": 500,
            "status_message": "Internal Server Error",
            "content":error.message
        });
    }
}

// Add a new zodiac sign
const addZodiaco = async (req, res, next) => {
    try{
        // Get data from request
        const id= req.body.id;
        const nombre = req.body.nombre;
        const periodo = req.body.periodo;

        // Get image data from request
        const mime = req.file.mimetype;
        const image = req.file.buffer.toString('base64');

        // Create object with all data
        const datos = {id, nombre, periodo, image, mime};

        // Insert data into database
        const conex = await getConnection();
        const result = await conex.query('insert into signos set ?',[datos]);
        res.status(201).json({
            "status_code": 201,
            "status_message": "Data was created",
            "content":result[0]});
    }catch (error) {
        res.status(500).json({
            "status_code": 500,
            "status_message": "Internal Server Error",
            "content":error.message
        });
    }
}

export const methods = {
    getZodiaco, addZodiaco
};
