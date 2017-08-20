var baseUrl = "http://localhost:8080/";

var getAllData = function () {
    $.ajax({
        type: "GET",
        url: baseUrl + "getAllData",
        success: function (data, status, xhr) {
            var html = "";

            console.log(status);

            if (data.length === 0) {
                html +=
                    "<tr>" +
                    "<td colspan='4' align='center'>" + "Tidak ada data" + "</td>" +
                    "</tr>";
            } else {
                data.forEach(function (data, index) {
                    html +=
                        "<tr id='row-" + index + "'>" +
                        "<td>" + (index + 1) + "</td>" +
                        "<td>" + data.nrp + "</td>" +
                        "<td>" + data.name + "</td>" +
                        "<td>" +
                        "<button onclick='moveToEdit(" + data.id + ")'>Edit</button>" +
                        "<button onclick='deleteData(" + data.id + ", " + index + ")'>Delete</button>" +
                        "</td>" +
                        "</tr>";
                });
            }

            $("#table-mahasiswa").append(html);
        },
        error: function (xhr, status, error) {
            alert(status);
        }
    })
};

var moveToAdd = function () {
    window.location.replace(baseUrl + "add");
};

var moveToEdit = function (id) {
    window.location.replace(baseUrl + "edit/" + id);
};

var deleteData = function (id, columnIndex) {
    $.ajax({
        type: "GET",
        url: baseUrl + "deleteData/" + id,
        success: function (data, status, xhr) {
            console.log(status);
            $("#row-" + columnIndex).remove();
        },
        error: function (xhr, status, error) {
            alert(status);
        }
    })
};

$(document).ready(getAllData);