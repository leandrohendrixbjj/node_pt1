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

    add(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO LIVROS (
                titulo,
                preco,
                descricao ) values (?, ?, ?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (error) => {
                    if (error) {
                        console.error(`Error on add livro ${error}`);
                        return reject(`Não foi possível add o livro: ${livro.titulo}`);
                    }
                });
            resolve();
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM livros WHERE id in (?)`,
                [id],
                (error) => {
                    if (error)
                        reject(`Error on method delete`)
                    resolve();
                }
            );
        });
    }



}

module.exports = LivroDao;