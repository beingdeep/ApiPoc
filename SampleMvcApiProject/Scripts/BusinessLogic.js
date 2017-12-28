(function ($) { //an IIFE so safely alias jQuery to $
    var host = 'http://localhost:49173/Api/';
    $.BL = function () { //renamed arg for readability

    };
    $.BL.prototype = {
        getSuppliers: function (call) {
            getResponse("Suppliers", "GET", null, null, (data) => {
                var response = data.map(x => ({ Id: x.Id, Name: x.Name }));
                call(response);
            });
        },
        getSupplier: function (id, call) {
            getResponse("Suppliers", "GET", null, { id: id }, (data) => {
                call(data);
            });
        },
        setSuppliers: function (supplier, call) {
            getResponse("Suppliers", "POST", null, supplier, (data) => {
                call(data);
            });
        },
        getProducts: function (call) {
            getResponse("Products", "GET", null, null, (data) => {
                console.log(data);
                call(data);
            });
        },
        getProduct: function (id, call) {
            getResponse("Products", "GET", null, { id: id }, (data) => {
                call(data);
            });
        },
        setProduct: function (product, call) {
            getResponse("Products", "POST", null, product, (data) => {
                call(data);
            });
        },
        updateProduct: function (id, product, call) { 
            getResponse("Products", "PUT", id, product, (data) => {
                call(data);
            });
        },
        deleteProduct: function (id, call) {
            getResponse("Products", "DELETE", id, null, (data) => {
                call(data);
            });
        }

    };

    var getResponse = (enitity, method, id, reqObj, call) => { 
        let url = host + enitity;
        if (id != null) {
            url += '/' + id;
        }
        $.ajax({
            async: true,
            url: url,
            method: method,
            dataType: "json",
            beforeSend: function (xhr) {
            },
            data: reqObj,
            success: function (data) {
                call(data);
            },
            error: function (xhr, textStatus, error) {
                call(reqObj);
            }
        });
    };
}(jQuery));