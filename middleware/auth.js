const jwt = require('jsonwebtoken');

const verifyToken = async ( req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Acceso denegado")
        try {
            const payload = jwt.verify(token, process.env.SECRET_TOKEN);
            req.payload = payload;
            next();
        } catch (error) {
            try {
                const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
                req.payload = payload;
                next();
            } catch (error) {
                res.status(400).send('Token caducado o no valido')
            }
        }
}

const verifyAdmin = async ( req, res, next) => {
            try {
            const payload = req.payload;
            if(payload.role === "user") return res.status(401).send("no tiene permiso");
            next();
        } catch (error) {
            res.status(400).send('admin caducado o no valido')
        }
}

module.exports = { verifyToken, verifyAdmin}