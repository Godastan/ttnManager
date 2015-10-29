var app = angular.module('TtnApp', []);

app.factory('products', function ($http) {
    return $http.get('scripts/products.json')
        .success(function (data) {
            return data;
        })
        .error(function (error) {
            return error;
        });
});

app.factory('ttns', function ($http) {
    return $http.get('scripts/ttns.json')
        .success(function (data) {
            return data;
        })
        .error(function (error) {
            return error;
        });
});

app.controller('ProductController', ['products', function (products) {

    this.products = [];
    this.editingIndex = null;
    var controller = this;

    products.success(function (data) {
        controller.products = data;
    });

    this.add = function () {
        controller.products.push({ttnId: 3, title: '', basePrice: 0, nds: 20, status: 0});
        controller.editingIndex = controller.products.length - 1;
    };

    this.startEdit = function (index) {
        controller.editingIndex = index;
    };

    this.cancelEdit = function () {
        controller.editingIndex = null;
    };

    this.delete = function (index) {
        controller.products.splice(index, 1);
    }
}]);

app.controller('TtnController', ['ttns', function (ttns) {
    this.ttns = [];
    this.editingIndex = null;
    var controller = this;

    ttns.success(function (data) {
        controller.ttns = data;
    });

    this.add = function () {
        controller.ttns.push({number: '', dateFrom: '', status: 0});
        controller.editingIndex = controller.ttns.length - 1;
    };

    this.startEdit = function (index) {
        controller.editingIndex = index;
    };

    this.cancelEdit = function () {
        controller.editingIndex = null;
    };

    this.delete = function (index) {
        controller.ttns.splice(index, 1);
    }
}]);
