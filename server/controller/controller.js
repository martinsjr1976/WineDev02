var Winedb = require('../model/model');

//create and save new wine
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Field cannot be empty!" });
        return;
    }

    //new wine
    const wine = new Winedb({
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        country: req.body.country,
        region: req.body.region,
        price: req.body.price
    })

    //save wine in the DB
    wine
        .save(wine)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred"
            });
        });
}

//retrieve and return all wines / single wine
exports.find = (req, res) => {
    
    if(req.query.id){
        const id=req.query.id;

        //find wine by ID
        Winedb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({ message: `Cannot find ${id}!`})
                } else {
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message: "An error occurred"})
            })
    } else {
        //find all the wine in the collection
        Winedb.find()
        .then(wine => {
            res.send(wine)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "An error occurred" })
        }); 
    }
}

//update wine
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Update information cannot be empty!" })
    }

    const id = req.params.id;
    Winedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot find ${id}!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "An error occurred!" })
        })
}

//delete wine
exports.delete = (req, res) => {
    const id = req.params.id;

    Winedb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete ${id}!` })
            } else {
                res.send({
                    message: "Wine was successfully deleted!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: "An error occurred!"
            });
        });

}