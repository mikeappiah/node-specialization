const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Product = sequelize.define(
	'Product',
	{
		name: { type: DataTypes.STRING, allowNull: false },
		price: { type: DataTypes.FLOAT, allowNull: false },
		category: {
			type: DataTypes.ENUM(
				'plumbing',
				'electricals',
				'agrochemicals',
				'home essentials',
				'building materials'
			),
			allowNull: false
		},
		quantity: { type: DataTypes.INTEGER, allowNull: false }
	},
	{
		timestamps: true
	}
);
// (async () => {
// 	await Product.sync({ force: true });
// 	console.log('The table for the Product model has been created successfully!');
// })();

module.exports = Product;
