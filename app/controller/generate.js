const { setNumber } = require('../services/setNumber');

const generateController = {
    generate: function(req, res) {
        res.json(setNumber());
    },
}

module.exports = generateController;