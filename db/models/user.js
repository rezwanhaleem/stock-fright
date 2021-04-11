module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    tickers: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: '',
    }
  });

  return User;
};