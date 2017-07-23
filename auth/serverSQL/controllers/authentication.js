import jwt from'jwt-simple';
import bcrypt from 'bcrypt-nodejs';
import db from '../db';
import {secret} from'../config';

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};

const generatedPassword = password => {
  return bcrypt.hashSync(password, bcrypt, genSaltSync(10), null);
};

export const signin = (req, res, next) => {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {

  const email = req.body.email;
  const password = req.body.password;
  const User = db.user;

  // See if a user with the given email exists
  User.findOne({where: {email}})
    .then((existingUser) => {

      if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password'});
      }

      // If a user with email does exist, return an error
      if (existingUser) {
        return res.status(422).send({ message: 'Email is in use'});
      } else {
        // If a user with email does NOT exist, create and save user record
        User.create(email, generatedPassword)
          .then((newUser, err) => {
            if (newUser) {
              // Repond to request indicating the user was created
              return res.json({ token: tokenForUser(email, generatedPassword)});
            }

            if (!newUser) {
              return next(err);
            }

          })
          .catch(err => {
            if (err) { return next(err); }
          })
      }
    });

};

