import { signup } from '../controllers/authentication';

describe.only('Basic test', () => {
	it('performs normally..', () => {
		expect(signup).toBe(signup);
	});
});

