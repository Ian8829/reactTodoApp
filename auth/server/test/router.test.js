import request from 'supertest-as-promised';
import Api from '../api';

describe('index route', () => {
	it('undefined', () => {

		return request(Api).get('/')
			.expect(200)
			.then((res) => {
				expect(typeof res.body.message).toBe('undefined');
			});
	});
});

describe('feature route before authenticate', () => {
	it('push to index page', () => {

		return request(Api).get('/feature')
			.expect(401)
			.then((res) => {
				expect(typeof res.body.message).toBe('string');
				expect(res.body.message).toContain('Welcome');
			});
	});
});

describe('existing data', () => {
	it('sends error message', () => {

		return request(Api).post('/signup').send({
			email: 'test@test.com',
			password: 'test'
		})
			.expect(422)
			.then((res) => {
				// expect(typeof res.body.message).toBe('string');
				expect(res.body.message).toBe('Email is in use');
			});
	});
});
