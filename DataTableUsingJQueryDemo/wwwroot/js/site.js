//// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
//// for details on configuring this project to bundle and minify static web assets.

//// Write your JavaScript code.

//1
//$.fn.dataTable.ext.errMode = 'throw';

//$(document).ready(function () {
//    $("#customerDatatable").DataTable({
//        "processing": true,
//        "serverSide": true,
//        "filter": true,
//        "ajax": {
//            "url": "/api/Customers",
//            "type": "POST",
//            "datatype": "json"
//        },
//        "columnDefs": [{
//            "targets": [0],
//            "visible": false,
//            "searchable": false
//        }],
//        "columns": [
//            { "data": "id", "name": "Id", "autoWidth": true },
//            { "data": "firstName", "name": "First Name", "autoWidth": true },
//            { "data": "lastName", "name": "Last Name", "autoWidth": true },
//            { "data": "contact", "name": "Country", "autoWidth": true },
//            { "data": "email", "name": "Email", "autoWidth": true },
//            { "data": "dateOfBirth", "name": "Date Of Birth", "autoWidth": true },
//            {
//                "render": function (data, row) { return "<a href='#' class='btn btn-danger' onclick=DeleteCustomer('" + row.id + "'); >Delete</a>"; }
//            },
//        ]
//    });
//});  