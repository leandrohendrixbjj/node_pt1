class LivroDao {

    constructor(db) {
        this._db = db;
        this._query = 'SELECT * FROM livros';
    }

    listaLivros(callback) {
        this._db.all(this._query,
            (erro, resultados) => {
                callback(erro, resultados);
            }
        )

    }
}

module.exports = LivroDao;