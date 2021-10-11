//Request a token
// DISCLAIMER : User should be authenticated~

// app.get('/token', (req, res) => {
//   const payload = {
//     name: 'MinJae',
//     scopes: ['customer:create', 'customer:read'],
//   };
//   const token = jwt.sign(payload, process.env.JWT_SECRET);
//   res.send(token);
// });

// app.get('/customer', authorization('customer:read'), (req, res) => {
//   res.send('customer information');
// });
