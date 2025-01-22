const jwt = require('jsonwebtoken');
const config = require('config')

exports.verify = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Not authenticated")
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send("Not authenticated")
    }

    const payload = jwt.verify(token, config.get('login.key'))
    req.userId = payload._id
    next();
}