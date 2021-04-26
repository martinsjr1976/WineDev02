$("#add_wine").submit(function(event){
    alert("Wine inserted successfully!");
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
        "url" : `http://localhost:3000/api/wines/${id}`,
        "method" : "DELETE",
        }

        if(confirm("Delete the selected wine?")){
           $.ajax(request).done(function(response){
               alert("Wine deleted successfully!")
               location.reload();
           }) 
        }
    })
}

$("#update_wine").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}
    
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']

    })
    
    console.log(data);

    var request={
        "url":`http://localhost:3000/api/wines/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response) {
        alert("Wine updated successfully!")
    })

})

