const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// app.use(express.bodyParser());


const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});
// console.log(process.env.AUTH0_DOMAIN);
const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
    console.log(signingkey);
}
let authenticated = (req, res) => {
    console.log("i was called")
    // getting the JWT from the request headers
    "Bearer ljdlasiudo87waudljaslidu"
    ["Bearer", "ljdlasiudo87waudljaslidu"]
    const token = req.headers.authorization.split(' ')[1];
    // token="ljdlasiudo87waudljaslidu"
    // checking the token if it is valid/verfied
    jwt.verify(token, getKey, {}, (err, user) => {
        if (err) {
            res.send('invalid token');
        }
        res.send("Your are authenticated/Authorized");
    })
};
module.exports = { authenticated };