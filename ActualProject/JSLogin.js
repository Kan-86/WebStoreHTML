var username = "admin";
var password = "admin";

$('#btnLogIn').on('click', function (e) {
    if ($('#userName').val() == username && $('#password').val() == password) {
        console.log("success");
        window.location.href = "Test.html";
    } else {
        alert("Wrong username and password");
        console.log($('#userName').val())
        console.log()
    }
});
