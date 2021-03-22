const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Mi casa verde lima"
        }
    );
})

module.exports = router;