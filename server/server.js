const express = require('express');
const cors = require('cors');
const { usersRouter } = require('./routes/users');
const { signInRouter } = require('./routes/signin');
const { customerSupportRouter } = require('./routes/customerSupport');
const { favlistRouter } = require('./routes/favlist');
const { feedbackRouter } = require('./routes/feedback');
// const { adsRouter } = require('./routes/ads');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ========================== ROUTES ============================== //

app.use('/users', usersRouter);
app.use('/signin', signInRouter);
app.use('/support', customerSupportRouter);
app.use('/favlist', favlistRouter);
app.use('/feedback', feedbackRouter);
// app.use('/ads', adsRouter);

// ================================================================ //

// PORT
const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});