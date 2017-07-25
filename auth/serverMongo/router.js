import passport from 'passport';
import { signin, signup } from './controllers/authentication';
import passportService from './services/passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
	app.get('/', requireAuth, (req, res) => {
		res.send({ message: 'Todo App connected!' });
	});
	app.post('/signin', requireSignin, signin);
	app.post('/signup', signup);
};
