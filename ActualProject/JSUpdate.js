$('#btnGetInfo').on('click', function (e) {
    e.preventDefault();
    var productId = parseInt($("#watchId").val());

    // In my case, I need to fetch these data before custom actions
    $.ajax({
        url: "http://watchwebstore.azurewebsites.net/api/watches/" + productId,
        type: 'GET',
        success: function (watch) {
            if (!watch) {
                alert("There is no watch with that id");
            } else {
                $('#watchProduct').val(watch.productName);
                $('#watchProductType').val(watch.productDescription);
                $('#watchPicture').val(watch.productPicture);
                $('#watchStock').val(watch.stock);
                $('#watchPrice').val(watch.price);

            }
        },
        error: function (request, message, error) {
            //handleException(request, message, error);
            alert("There is no watch with that id");
        }
    });
});

$('#myFormWatch').on('submit', function (e) {
    e.preventDefault();
    var productId = parseInt($("#watchId").val());
    var productName = $("#watchProductType").val();
    var productDescription = $("#watchProduct").val();
    var productPicture = $("#watchPicture").val();
    var stock = $("#watchStock").val();
    var price = $("#watchPrice").val();
    // In my case, I need to fetch these data before custom actions
    $.ajax({
        url: "http://watchwebstore.azurewebsites.net/api/watches/" + productId,
        type: 'PUT',
        data: JSON.stringify({

            "Id": productId,
            "productName": productName,
            "productDescription": productDescription,
            "productPicture": productPicture,
            "stock": stock,
            "price": price
        }),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("Yay");
            alert("Watch updated!");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});