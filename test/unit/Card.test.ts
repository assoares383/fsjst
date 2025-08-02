import Card from "../../src/entity/Card";

test("Deve criar um cartao", () => {
  const card = new Card("Atividade 1", 3);
  expect(card.title).toBe("Atividade 1");
  expect(card.estimative).toBe(3);
});

test("Nao deve criar cartao sem titulo", () => {
  expect(() => new Card("", 3)).toThrow(new Error("Title is required"));
});

test("Nao deve criar cartao com estimativa negativa", () => {
  expect(() => new Card("Atividade 1", -3)).toThrow(
    new Error("Estimative must be positive")
  );
});
