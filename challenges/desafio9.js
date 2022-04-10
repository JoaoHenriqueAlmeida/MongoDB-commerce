db.produtos.find({
  valoresNutricionais: {
    $eleMatch: {
      $and: [
        { tipo: "calorias" },
        { quantidade: { $lt: 500 } },
      ],      
    },
  },
}, {
  _id: false,
  nome: true,
});
