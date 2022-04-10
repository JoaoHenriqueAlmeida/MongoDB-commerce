db.produtos.updateMany({
  nome: "Big Mac",
}, {
  $set: {
    ultimaModificacao: 0,
  },
});

db.produtos.updateMany({
  nome: "Bic Mac",
}, {
  $currentDate: {
    ultimaModificacao: { $type: "timestamp" },
  },
});

db.produtos.find({
  ultimaModificacao: { $exists: true },
}, {
  _id: false,
  nome: true,
});
