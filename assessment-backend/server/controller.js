const houses = require('./db.json')
let globalId = 4

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, bedrooms, bathrooms, sqft, imageURL} = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            bedrooms,
            bathrooms,
            sqft,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },

    //Change the montlhy rent by increments of $100
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => elem.id === +id)

        
        if(houses[index].price === 0 && type === 'minus'){
            res.status(400).send('Cannot go below 0')
        }else if(type === 'plus'){
            houses[index].price+=100
            res.status(200).send(houses)
        }else if(type === 'minus'){
            houses[index].price-=100
            res.status(200).send(houses)
        }else{
            res.status(400).send('you broke something')
        }
    }
}