const express = require('express');
const app = express();
const port = 3000;

// Gelen JSON formatındaki verileri okuyabilmek için şart olan middleware
app.use(express.json());


// Sabit (hardcoded) kullanıcı listesi
const users = [
  { id: 1, username: 'muge123', email: 'muge@example.com' },
  { id: 2, username: 'johndoe', email: 'johndoe@gmail.com' }
]


// Routes (endpoints)

// Ana Sayfa Rotası (http://127.0.0.1:3000/ için)
app.get('/', (req, res) => {
  res.send('Node.js and Express.js Server is active!');
});


// 1. GET /v1/users -> Sabit kullanıcı dizisini döner
app.get('/v1/users', (req, res) => {
  res.json(users);
});


// 2. POST /v1/users -> username ve email bekler
app.post('/v1/users', (req, res) => {
  const { username, email } = req.body || {};  // ADIM 1: Önce verileri req.body'den çekiyoruz

  // ADIM 2: Sonra doğrulama (validation) yapıyoruz
  if (!username || !email) {
    return res.status(400).send({ error: 'Username and email are required' })
  } else {
    
  }

  // ADIM 3: Yanıt nesnesi oluşturup döndürüyoruz
  const newUser = {
    username: username,
    email: email,
    createdAt: new Date().toISOString() // Otomatik oluşturulan tarih
  }

  return res.status(201).send({ data: newUser });
});


// 3. POST /v2/users -> name, surname ve email bekler
app.post('/v2/users', (req, res) => {
  const { name, surname, email } = req.body || {};

  if (!name || !surname || !email) {
    return res.status(400).send({ error: 'Name, surname and email are required' })
  } 

  const newUserV2 = {
    name: name,
    surname: surname,
    email: email,
    createdAt: new Date().toISOString()
  }

  return res.status(201).send({ data: newUserV2 });
});


// Sunucuyu Başlatma
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});