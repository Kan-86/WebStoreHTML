$('#myFormWatch').on('submit', function (e) {
    e.preventDefault();
    var productId = parseInt($("#watchId").val());

    // In my case, I need to fetch these data before custom actions
    $.ajax({
        url: "http://watchwebstore.azurewebsites.net/api/watches/" + productId,
        type: 'DELETE',
        success: function (comments) {
            console.log("Yay");
            alert("Watch deleted!");
        },
        error: function (request, message, error) {
            //handleException(request, message, error);
            alert("There is no watch with that id");
        }
    });
});