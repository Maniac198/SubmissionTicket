import express from 'express';
const router = express.Router();

router.get('/newtest', (req,res) => {
    res.status(300).send({name :"manish"});
})

export default router;