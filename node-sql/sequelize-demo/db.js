const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USER,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST,
		dialect: 'mysql'
	}
);

(async () => {
	try {
		await sequelize.authenticate();
		console.log('Database connection established successfully!');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();



module.exports = sequelize;
