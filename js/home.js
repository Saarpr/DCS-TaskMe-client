
$(function () {
    usersOperationsListeners();
});

function getlogin() {
    $.ajax({
        url: 'http://localhost:3000/auth/google',
        type: 'GET',
        success: function (rests) {
        }
    });
}


function usersOperationsListeners() {

    //GET
    $("#login_btn").click(() => {
        getlogin();
    });
}
