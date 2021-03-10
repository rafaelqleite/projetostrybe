const noSimilarBlock = db.voos.find({"empresa.nome": "PASSAREDO", natureza: "Doméstica"}).count();
db.resumoVoos.insertOne({ "empresa": "PASSAREDO", totalVoosDomesticos: noSimilarBlock });
db.resumoVoos.find({}, {_id: 0}).pretty();
