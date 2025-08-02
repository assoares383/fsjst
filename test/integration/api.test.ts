import axios from "axios";

test("Deve retornar os quadors por meio da API", async () => {
  const response = await axios({
    url: "http://localhost:3000/boards",
    method: "GET",
  });

  const boards = response.data;
  expect(boards).toHaveLength(1);
});
