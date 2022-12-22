class LivroDao {

    constructor(db) {
        this._db = db;
        this._query = 'SELECT * FROM livros';
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                this._query,
                (error, data) => {
                    if (error) reject('Não foi possível listar os livros!')
                    resolve(data);
                }
            )
        });
    }
}

module.exports = LivroDao;