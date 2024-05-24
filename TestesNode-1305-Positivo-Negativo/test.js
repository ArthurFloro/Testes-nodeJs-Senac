const PositivoNegativo = require("./positivonegativo");
test("Verificar se os números são positivos ou negativos", function () {
  expect(PositivoNegativo(1)).toBe("positivo");
  expect(PositivoNegativo(-1)).toBe("negativo");
});
