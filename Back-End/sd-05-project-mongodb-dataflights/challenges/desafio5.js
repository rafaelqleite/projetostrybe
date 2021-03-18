db.voos.find({}, {_id:0, vooId: true}).skip(9).limit(3).pretty();
