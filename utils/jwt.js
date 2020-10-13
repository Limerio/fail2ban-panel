const jwt = require("jsonwebtoken");

function sign(data) {
 const tokenGenerate = jwt.sign(data.data, process.env.JWT_HASH);
 return tokenGenerate;
}

function verify(token) {
 const tokenVerify = jwt.verify(token, process.env.JWT_HASH);
 return tokenVerify ? true : false;
}

module.exports = {
 sign,
 verify
}
