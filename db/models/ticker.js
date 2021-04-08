module.exports = (sequelize, DataTypes) => {
  const Ticker = sequelize.define('Ticker', {
    labels: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Ticker.associate = (models) => {
    Ticker.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Ticker;
};