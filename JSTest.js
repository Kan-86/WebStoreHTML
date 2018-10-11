
function listWatches() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'http://watchwebstore.azurewebsites.net/api/watches/',
        type: 'GET',
        dataType: 'json',
        success: function (watches) {
            onGetWatchesSuccess(watches);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

$('#watchesTable').on('click', 'button', event => {
    deleteWatches(event.currentTarget);
});

$('#btnId').on('click', event => {
    deleteWatches(event.currentTarget);
});

function deleteWatches() {
    // Call Web API to get a list of post
    var id  = $('#btnId').attr('value');
    $.ajax({
        url: 'http://watchwebstore.azurewebsites.net/api/watches/'+ id,
        type: 'DELETE',
        dataType: 'json',
        //data: "id=" + id,
        async: true,
        processData: false,
        cache: false,
        success: function () {
            $('tr.selector').remove();
            $('div.success').fadeIn();
            alert('Watch deleted');
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function handleException(watches) {
    // Iterate over the collection of data
    console.log("Oops, error")
}

function onDeleteWatchesSuccess(watches) {
    // Iterate over the collection of data
    $('#watchesTable').attr(id);
}

function onGetWatchesSuccess(watches) {
    // Iterate over the collection of data
    $.each(watches, function (index, watch) {
        // Add a row to the post table
        addwatchesRow(watch);
    });
}

function addwatchesRow(watch) {
    // Check if <tbody> tag exists, add one if not
    if ($("#watchesTable tbody").length == 0) {
        $("#watchesTable").append("<tbody></tbody>");
    }
    // Append row to <table>
    $("#watchesTable tbody").append(
        buildwatchesRow(watch));
}

function buildwatchesRow(watch) {
    var ret =
        "<tr>" +
        "<td>" + watch.id + "</td>" +
        "<td>" + watch.productName + "</td>" +
        "<td>" + watch.productDescription + "</td>" +
        "<td>" + watch.productPicture + "</td>" +
        "<td>" + watch.stock + "</td>" +
        "<td>" + watch.price + "</td>" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-info' " +
        "data-id='" + watch.id + "'>" +
        "<i class='fas fa-info-circle'></i>" +
        "</button>" +
        "</td >" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-danger' " +
        "data-id='" + watch.id + "'>" +
        "<i class='fas fa-minus-circle'></i>" +
        "</button>" +
        "</td >" +
        "</tr>";
    return ret;
}



$('#myFormWatch').on('submit',function(e){
    e.preventDefault();
    var productName = $( "#watchProductType" ).val();
    var productDescription = $( "#watchProduct" ).val();
    var productPicture = $( "#watchPicture" ).val();
    var stock = $( "#watchStock" ).val();
    var price = $( "#watchPrice" ).val();
    // In my case, I need to fetch these data before custom actions
    $.ajax({
        url: "http://watchwebstore.azurewebsites.net/api/watches/",
        type: 'POST',
        data: JSON.stringify({
            "productName": productName,
            "productDescription": productDescription,
            "productPicture": productPicture,
            "stock": stock,
            "price": price}),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("Yay");
            alert("Watch added!");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});
