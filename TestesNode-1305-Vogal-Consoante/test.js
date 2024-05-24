const VogalConsoante = require("./vogalconsoante.js");
test("Verificar se as letras são vogais", function () {
  expect(VogalConsoante("a")).toBe("vogal");
  expect(VogalConsoante("o")).toBe("vogal");
  expect(VogalConsoante("i")).toBe("vogal");
  console.log("letras testadas: a, i e o;");
});

test("Verificar se as letras são consoantes", function () {
  expect(VogalConsoante("s")).toBe("consoante");
  expect(VogalConsoante("t")).toBe("consoante");
  expect(VogalConsoante("c")).toBe("consoante");
  console.log("letras testadas: s, t e c");
});
