/*$(document).ready(function () {
    // FORM ADD PERSON
    $('fsdform').submit(function (event) {
        event.preventDefault();

        var form = $(this);

        $.ajax({
                type: 'POST',
                url: '/people',
                data: form.serialize(),
                dataType: 'json',
            }).done(function (resp) {
                var response = resp.content;
                $("#responseHere").html(response);
            })
            .fail(function (xhr, status, errorThrown) {
                $("#responseHere").html("ERROR: " + errorThrown);
            })
    });
}); */