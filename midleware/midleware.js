const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const secret_key = "xyzuabibipopatumqueijo";
    let authToken = req.headers["authorization"];
    const token = authToken && authToken.split(" ")[1];

    if(!token){
        return res.status(401).send(`Token não fornecido para a verificação`);
    }else {
        jwt.verify(token, secret_key, (err) => {
            if(err){
                return res.status(401).send(`Token inválido ou expirado`);
            }else {
                next();
            }
        })
    }
}

module.exports = auth;