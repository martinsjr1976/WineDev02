
const axios=require('axios');

exports.homeRoutes = (req,res)=>{
    //get request to /api/wines
    axios.get('http://localhost:3000/api/wines')
        .then(function(response){
            // console.log(response.data)
            res.render('index',{wines:response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    res.render('index',{wines:"New Wine"});
}

exports.add_wine = (req,res)=>{
    res.render('add_wine');
}

exports.update_wine = (req,res)=>{
    res.render('update_wine');
}