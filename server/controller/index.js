const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
       res.send('hello')
    }
    catch (e) {
        console.log('e',e)
        res.status(500).send({error:true, message:e?.message})
    }
})


module.exports  = router