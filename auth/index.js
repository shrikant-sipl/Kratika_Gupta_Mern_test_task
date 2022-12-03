let jwt = require('jsonwebtoken');

exports.isLoginAPI = (req, res, next) => {
    /** check LOGIN token */
    let token;
    token = req.headers?.authorization?req.headers.authorization:req.body.headers?.Authorization;
    let temp = token?.split(" ")[1];


    if (temp) {
        jwt.verify(temp, '3425h435%$%#^@^*#$^Nfnsr7477247n2567nset@#gyuonx57', (error, success) => {
            if (error) {
                console.error(error);
                res.status(401).send({
                    message : "You're unauthorized",
                    status : 401
                })
            }
            console.log('Authorized')
            res.status(200);
            next();
        })
    }
    else {
    
        const err = new Error("Error");
        err.status = "512";
        err.errors = 'error';
        res.status(401).send({
            message : "You're unauthorized",
            status : 401
        })
       res.send({
            message : "You're unauthorized",
            status : 401
        })
        next(err);

    }

}