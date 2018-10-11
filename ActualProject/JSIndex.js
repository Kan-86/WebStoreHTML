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

function onGetWatchesSuccess(watches) {
    $("#pageD").empty();
    $("#pageD").append('<div id="wow_1"></div >' +
        '<div id = "div_1">'
        + '<a href="#top"><img src="img/logo.png" class="image2" alt="lol" width="52" height="52"></a></div>'
    );
    $.each(watches, function (index, watch) {
        $("#pageD").append('<div id="div_"' + (index + 2) + '>');
        $("#pageD").append('<a href="index1.html?id=' + watch.id + '">');

    })
    
    $("#pageD").append('</div > ' +
        '<div id="disc_1"><h2>STAY CONNECTED</h2></div>' +
        '<div id="disc_2"><h2>STAY ACTIVE</h2></div>' +
        '<div id="disc_3"><h2>STAY HEALTHY</h2></div>')
}

       
      //          <img alt="W3Schools" src="img/asd.jpg" width="180" height="185"></a>
						//</div>

      //      <div id="div_3">
      //          <a href="pink.html">
      //              <img alt="W3Schools" src="img/2.jpg" width="190" height="190"></a>
						//		</div>
      //          <div id="div_4">
      //              <a href="silver.html">
      //                  <img alt="W3Schools" src="img/3.jpg" width="190" height="190"></a>	
      //                      </div>

      //          </div>
      //          <div id="disc_1"><h2>STAY CONNECTED</h2></div>
      //          <div id="disc_2"><h2>STAY ACTIVE</h2></div>
      //          <div id="disc_3"><h2>STAY HEALTHY</h2></div>
