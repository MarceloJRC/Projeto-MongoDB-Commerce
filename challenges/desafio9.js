db.produtos.find({ valoresNutricionais: { $elemMatch: { quantidade: { $lte: 500 },
    tipo: "calorias" } } }, { _id: 0, nome: 1 });