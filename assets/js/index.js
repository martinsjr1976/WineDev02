$("#add_wine").submit(function(event){
    alert("Wine inserted successfully!");
})

// $("#update_wine").submit(function(event){
//     event.preventDefault();
//     alert("Wine updated successfully!");

//     var unindexed_array = $(this).serializeArray();
//     var data = {}

//     $.map(unindexed_array.function (n,i) {
//         data[n['name']] = n['value']
//     })

//     console.log(data);

//     var request = {
//         "url" : `http://localhost:3000/api/wines/${data.id}`,
//         "method" : "PUT",
//         "data" : data
//     }

//     $.ajax(request).done(function(response){
//         alert("Wine updated successfully")
//     })
// })