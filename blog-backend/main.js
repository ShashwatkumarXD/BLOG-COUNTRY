// backend/main.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// app.use(cors({ origin: 'https://blog-country-api.onrender.com', credentials: true }));

const allowedOrigins = [ 'https://blog-country.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use(bodyParser.json());
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
}));

// Dummy user
const USER = { username: 'admin', password: '1234' };

// Login endpoint
app.post('/login', (req, res) => {
  console.log("login called");
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.user = { username };
    res.send({ loggedIn: true, username });
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
});

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send({ loggedOut: true });
});

// Check user session
app.get('/me', (req, res) => {
  if (req.session.user) {
    res.send({ user: req.session.user });
  } else {
    res.status(401).send({ error: 'Not authenticated' });
  }
});

// Run the backend server
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));