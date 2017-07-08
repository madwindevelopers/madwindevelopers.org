function init() {
    $("#message-form").submit(function(event) {
        $("#message-form-submit-button").attr("disabled",true);

        var formData = $(this).serializeArray();
        $.post("/message-form", formData, function( data ) {
            $("#message-form").remove();
            $("#contact-form-title").text(data.details);
        }, "json");

        event.preventDefault();
    });

    $("#email-form").submit(function(event) {
        $("#email-form-submit-button").attr("disabled",true);

        var formData = $(this).serializeArray();
        $.post("/email-form", formData, function(data) {
            $("#email-form").remove();
            $("#email-form-title").text(data.details);
        }, "json");
        event.preventDefault();
    });
}

$(document).ready(function() {
    init();
});

function enableMsgButton() {
    $("#message-form-submit-button").removeAttr("disabled");
}