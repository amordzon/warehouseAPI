const express = require("express");
const productRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

productRoutes.route("/products").get(function (req, res) {
  let sortBy = req.query.sortBy;
  let sortOrder = req.query.sortOrder == "1" ? 1 : -1;
  let filterKey = req.query.filterKey;
  let filterValue = req.query.filterValue;
  let filterQuery = {};
  let sortQuery = {};
  if (filterKey && filterValue) {
    filterQuery = { [filterKey]: { $regex: filterValue } };
    console.log(filterQuery);
  }
  if (sortBy && sortOrder) {
    sortQuery = { [sortBy]: sortOrder };
  }
  let db_connect = dbo.getDb("warehouse");
  db_connect
    .collection("products")
    .find(filterQuery)
    .sort(sortQuery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

productRoutes.route("/products/:id").get(function (req, res) {
  let db_connect = dbo.getDb("warehouse");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

productRoutes.route("/products").post(function (req, response) {
  let db_connect = dbo.getDb("warehouse");
  db_connect
    .collection("products")
    .findOne({ name: req.body.name }, function (err, result) {
      if (result) {
        response.json("Taki produkt juz istnieje");
      } else {
        let myobj = {
          name: req.body.name,
          price: req.body.price,
          amount: req.body.amount,
          size: req.body.size,
        };
        db_connect.collection("products").insertOne(myobj, function (err, res) {
          if (err) throw err;
          response.json(res);
        });
      }
    });
});

productRoutes.route("/products/:id").put(function (req, response) {
  let db_connect = dbo.getDb("warehouse");
  let myquery = { _id: ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      price: req.body.price,
      amount: req.body.amount,
      size: req.body.size,
    },
  };
  db_connect
    .collection("products")
    .updateOne(myquery, newValues, function (err, res) {
      if (err) throw err;
      console.log("document updated successfully");
      response.json(res);
    });
});

productRoutes.route("/products/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("warehouse");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("document deleted");
    res.json(obj);
  });
});

productRoutes.route("/report").get(function (req, res) {
  let db_connect = dbo.getDb("warehouse");
  db_connect
    .collection("products")
    .aggregate([
      {
        $project: {
          name: 1,
          price: 1,
          amount: 1,
          total: { $multiply: ["$price", "$amount"] },
        },
      },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = productRoutes;
