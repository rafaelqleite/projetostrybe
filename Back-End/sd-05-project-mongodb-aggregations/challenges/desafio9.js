db.trips.aggregate(
  [
    { $match: { birthYear: { $ne: "" } } },
    {
      $group: { _id: null, maiorAnoNascimento: { $max: { $toInt: "$birthYear" } }, menorAnoNascimento: { $min: { $toInt: "$birthYear" } } },
    },
    { $project: { _id: 0, maiorAnoNascimento: 1, menorAnoNascimento: 1 } },
  ],
);
//  https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/index.html
