const jwt = require('jsonwebtoken');

const secret = '7s!Vn@qP4xCkR8mZ2yL9fW/hBvT6dJpA1B2C3D4343'; 

const payload = {
  role: 'anon',
  iss: 'supabase',
};

const options = {
  algorithm: 'HS256',
  expiresIn: '100y',
};

const anonToken = jwt.sign(payload, secret, options);

console.log('--- NEW ANONYMOUS JWT KEY ---');
console.log(anonToken);
console.log('-----------------------------');