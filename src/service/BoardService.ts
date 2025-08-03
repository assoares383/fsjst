import pgp from "pg-promise";
import Board from "../entity/Board";

export default class BoardService {
  constructor() {}

  async getBoards() {
    const connection = pgp()(
      "postgres://admin-postgres:admin-postgres%40123@localhost:5432/pg-fsjst"
    );

    const boardsData = await connection.query(
      "select id_board, name from db.board",
      []
    );

    const boards: Board[] = [];

    for (const boardData of boardsData) {
      const cardsData = await connection.query(
        "select * from db.card join db.column using (id_column) where id_board = $1",
        [boardData.id_board]
      );

      let estimative = 0;

      for (const cardData of cardsData) {
        estimative += cardData.estimative;
      }

      const board = new Board(boardData.name);
      board.estimative = estimative;
      boards.push(board);
    }

    await connection.$pool.end();
    return boards;
  }
}
