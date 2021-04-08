module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Ticker, {
      foreignKey: 'userId',
      as: 'tickers',
    });
  };

  return User;
};