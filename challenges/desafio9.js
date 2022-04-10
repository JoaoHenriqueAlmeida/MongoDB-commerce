db.produtos.find({
  valoresNutricionais: {
    $eleMatch: {
      tipo: "calorias",
      quantidade: { $lt: 500 },
    },
  },
}, {
  _id: false,
  nome: true,
});
