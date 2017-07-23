import passport from 'passport';
import db from './db';
import {signin, signup} from './controllers/authentication';
import passportService from './middleware/passport';

const port = process.env.PORT || 3090;
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export default function (app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Todo App connected!' });
  });
  app.post('/signin', requireSignin, signin);
  app.post('/signup', signup);

  db.sequelize.sync({force: true})
    .then(() => {
      app.listen(port, () => {
        console.log(`Express listening on port ${port}!`);
      });
    });
};
