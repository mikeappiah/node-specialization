const pool = require('../db');

class Product {
	static async getAll() {
		const { rows } = await pool.query('SELECT * FROM products');
		return rows;
	}
	static async getOne(id) {
		const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [
			id
		]);
		return rows[0];
	}
	static async create(name, category, price, quantity) {
		await pool.query(
			`INSERT INTO products(name, category, price, quantity) VALUES($1, $2, $3, $4)`,
			[name, category, price, quantity]
		);
	}
}

module.exports = Product;
