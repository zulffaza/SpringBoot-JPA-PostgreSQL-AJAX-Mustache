var baseUrl = "http://localhost:8080/";

var checkEdit = function () {
    var id = $("#id").val();
    var title = "Hello ";

    if (id) {
        title += "Edit";

        $("#title").html(title);
        $.ajax({
            type: "GET",
            url: baseUrl + "getDataById/" + id,
            success: function (data, status, xhr) {
                console.log(status);

                $("#name").val(data.name);
                $("#nrp").val(data.nrp);
                $("#nrp").prop("disabled", true);

                $("#submit").val("Edit");
            },
            error: function (xhr, status, error) {
                console.log(status);
            }
        });
    } else {
        title += "Add";

        $("#title").html(title);
        $("#submit").val("Add");
    }
};

var submitData = function (event) {
    event.preventDefault();

    var id = $("#id").val();
    id = id ? id : null;

    var nrp = $("#nrp").val();
    var name = $("#name").val();

    var data = '{ "id": ' + id + ', "nrp": ' + nrp + ', "name": "' + name + '" }';

    $.ajax({
        type: "POST",
        url: baseUrl + "addData",
        dataType: "json",
        contentType: "application/json",
        data: data,
        success: function (data, status, xhr) {
            console.log(status);
            window.location.replace(baseUrl);
        },
        error: function (xhr, status, error) {
            console.log(status);
        }
    });
};

$(document).ready(checkEdit);
$("#form-data").submit(submitData);