import Board from "../../src/entity/Board";

test("Deve criar um quadro", () => {
  const board = new Board("Projeto 1");
  board.estimative = 6;
  expect(board.name).toBe("Projeto 1");
  // expect(board.estimative).toBe(6);
});

test("Nao deve criar um quadro sem nome", () => {
  expect(() => new Board("")).toThrow(new Error("Name is required"));
});
