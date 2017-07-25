import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import User from '../models/user';
import config from '../config';
import Auth from '../controllers/authentication';

const userModel = mongoose.model('user');
const { email, password } = req.body;
describe('userModel', () => {
	it('post to /signup email, password', () => {
		return request()
	})
})