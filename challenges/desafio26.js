db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio" } } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});
