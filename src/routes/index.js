const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo desde Github con express en AWS EC2!"
        }
    );
})

module.exports = router;