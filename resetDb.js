const { sequelize } = require('./models');

const main = async () => {
  try {
    await sequelize.sync({ force: true })
  } catch (e) {
    console.error(e.message);
  } finally {
    process.exit();
  }
}

main();