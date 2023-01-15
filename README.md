# warehouseAPI
API created with express and mongodb
## Table of contents
* [General info](#general-info)
* [Deployment](#deployment)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage example](#example)

## General info
This project is simple CRUD warehouse API.

## Deployment
Live demo: https://warehouseapi-387v.onrender.com/products
 
## Technologies
Project is created with:
* Express
* Mongodb
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../warehouseAPI
$ npm install
$ npm start
```

## Usage example

### Get all products

```
GET https://warehouseapi-387v.onrender.com/products
```
<img width="856" alt="Screenshot 2023-01-15 at 21 08 38" src="https://user-images.githubusercontent.com/97406794/212564435-b57615b7-aafd-4d20-9b80-c738638c8199.png">

### Get one product

```
GET https://warehouseapi-387v.onrender.com/products/63c444bb43a46edea4b12fe5
```
<img width="839" alt="Screenshot 2023-01-15 at 21 10 01" src="https://user-images.githubusercontent.com/97406794/212564492-a6e78454-f09a-406a-bd38-07be82bb2b01.png">

### Create product

```
POST https://warehouseapi-387v.onrender.com/products
```
<img width="861" alt="Screenshot 2023-01-15 at 21 12 36" src="https://user-images.githubusercontent.com/97406794/212564588-f7970395-9a9a-4680-9de4-53f64c4e2484.png">

### Update product
```
PUT https://warehouseapi-387v.onrender.com/products/63c445656f4cb3f2156863a4
```
<img width="811" alt="Screenshot 2023-01-15 at 21 14 53" src="https://user-images.githubusercontent.com/97406794/212564673-e61d9d89-5a9b-4d5c-b908-0376d9b9e1cd.png">

### Delete product
```
DELETE https://warehouseapi-387v.onrender.com/products/63c45e1a7d3d7ece57ef186a
```
<img width="894" alt="Screenshot 2023-01-15 at 21 15 46" src="https://user-images.githubusercontent.com/97406794/212564715-4a0d8db5-2585-4238-a244-dda879f8502a.png">

### Generate report
```
GET https://warehouseapi-387v.onrender.com/report
```
<img width="989" alt="Screenshot 2023-01-15 at 21 18 28" src="https://user-images.githubusercontent.com/97406794/212564829-ef2a93e0-c1d9-424c-8d4e-8258f8a93fda.png">
