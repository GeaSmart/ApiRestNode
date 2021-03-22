const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo con express en AWS EC2!"
        }
    );
})

module.exports = router;