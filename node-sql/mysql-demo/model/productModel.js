const pool = require('../db');

class Product {
	static async getAll() {
		const [row] = await pool.query('SELECT * FROM products');
		return row;
	}
	static async getOne(id) {
		const [row] = await pool.query(`SELECT * FROM products WHERE id = ?`, [id]);
		return row[0];
	}
	static async create(name, category, price, quantity) {
		const [result] = await pool.query(
			`INSERT INTO products(name, category, price, quantity) VALUES(?, ?, ?, ?)`,
			[name, category, price, quantity]
		);
		const resultId = result.insertId;

		return this.getOne(resultId);
	}
}

module.exports = Product;
