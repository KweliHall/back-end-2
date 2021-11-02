const houses = require("./db.json");
let globalId = 4



module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouses: (req, res) => {
        let index = houses.findIndex((elem) => elem.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouses: (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouses = {
            id: globalId,
            address, 
            price, 
            imageURL
        }
        houses.push(newHouses);
        res.status(200).send(houses);
        globalId++;
    },
    updateHouses: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = houses.findIndex((elem) => elem.id=== +id);

        if(houses[index].price === 1000000000000000 && type === "plus") {
            res.status(400).send("Cannot got above 1000000000000000");
        } else if(houses[index].price === 0 && type === "minus") {
            res.status(400).send("cannot go below 0");
        } else if(type === "plus") {
            houses[index].price++;
            res.status(200).send(houses);
        } else if(type === "minus") {
            houses[index].price--;
            res.status(200).send(houses);
        }
    }
}
    
