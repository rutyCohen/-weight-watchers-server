require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./mongoose');
const { PORT, ENVIRONMENT, SECRET, BASEURL, CLIENTID, ISSUERBASEASEURL, SESSION_SECRET } = require('./config');
const logger = require('./configuration');
const path = require('path');
const cors = require('cors');
// const swaggerUi = require("swagger-ui-express");
// swaggerDocument = require("./swagger.json");
const { auth } = require('express-openid-connect');
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const clientUrl = 'http://127.0.0.1:5500/client/src/html/userPage.html'
const { requiresAuth } = require('express-openid-connect');

const user = require('./router/user.router');
const diary = require('./router/diary.router');
const meeting = require("./router/meeting.router");
const account = require('./router/account.router');
const group = require('./router/group.router');
const manager = require('./router/manager.router');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

app.use(express.static('static'));
db.connect();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: SECRET,
//   baseURL: BASEURL,
//   clientID: CLIENTID,
//   issuerBaseURL: ISSUERBASEASEURL
// };

// app.use(auth(config));

// app.get('/', (req, res) => {
//   if(req.oidc.isAuthenticated()){
//     //res.cookie('cookieFromAuto0', req.cookies);
//     res.send(res.redirect(clientUrl));
//   } else {
//     res.send('Logged out');
//   }

// });

// const session = {
//   secret: SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: false
// };

// if (app.get('env') === 'production') {
//   // Serve secure cookies, requires HTTPS
//   session.cookie.secure = true;
// }
app.use(cors());
app.use(express.json());

// app.use(requiresAuth());
app.use('/api/user', user);
app.use('/api/diary', diary);
app.use("/api/meeting", meeting);
app.use('/api/account', account);
app.use('/api/group', group);
app.use('/api/manager', manager);

app.use((err, req, res, next) => {
    if (ENVIRONMENT === 'development')
        logger.error(err.message)
    if (err.message == 'user validation failed: email: Please enter a valid email')
        res.status(400).send(err.message);
    else {
        res.status(500).send(err.message)
    }
    next();
})

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './static/404.html'));
});

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(PORT || 8200, () => logger.warn(`server is running on port ${PORT}`));





