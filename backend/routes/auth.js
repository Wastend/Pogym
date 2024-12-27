const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { login, password } = req.query;
    console.log(login, password);
    
    if (login === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Authenticated successfully' });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

module.exports = router;