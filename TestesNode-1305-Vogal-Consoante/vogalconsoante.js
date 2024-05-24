function VogalConsoante(letra) {
  const vogais = ["a", "e", "i", "o", "u"];
  if (vogais.includes(letra)) {
    return "vogal";
  } else {
    return "consoante";
  }
}

module.exports = VogalConsoante;
