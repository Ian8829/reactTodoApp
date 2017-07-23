import bcrypt from 'bcrypt-nodejs';

export default function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [4, 20]
      }
    }
  }, {
    instanceMethods: {
      comparePassword: (candidatePassword, callback) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          if (err) { return callback(err); }

          callback(null, isMatch);
        });
      }

    }
  });

  return user;
}