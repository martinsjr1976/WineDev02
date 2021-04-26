
const axios=require('axios');

exports.homeRoutes = (req,res)=>{
    //get request to /api/wines and return all the itens in the collection
    axios.get('http://localhost:3000/api/wines')
        .then(function(response){
            res.render('index',{wines:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.add_wine = (req,res)=>{
    res.render('add_wine');
}

exports.update_wine = (req,res)=>{
    //passing the id of the selected item to the update page
    axios.get('http://localhost:3000/api/wines', {params:{id:req.query.id}})
        .then(function(wineData){
            res.render("update_wine", {wine: wineData.data})
        })
    .catch(err=>{
        res.send(err);
    })
}