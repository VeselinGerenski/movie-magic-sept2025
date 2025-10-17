import { Router } from "express";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create')
});

movieController.post('/create', (req, res) => {
    // TODO read data from request
    console.log(req.body);

    res.end();
});

export default movieController;
