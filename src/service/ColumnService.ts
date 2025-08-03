import pgp from "pg-promise";
import Column from "../entity/Column";

export default class ColumnService {
  constructor() {}

  async getColumns(idBoard: number) {
    const connection = pgp()(
      "postgres://admin-postgres:admin-postgres%40123@localhost:5432/pg-fsjst"
    );

    const columnsData = await connection.query(
      "select name, has_estimative from db.column where id_board = $1",
      [idBoard]
    );

    const columns: Column[] = [];

    for (const columnData of columnsData) {
      columns.push(new Column(columnData.name, columnData.has_estimative));
    }

    await connection.$pool.end();
    return columns;
  }
}
