var app = angular.module('TtnApp', []);

app.controller('ProductController', function(){
    this.products = [
        {id: 1,  ttnId: 3, title: 'Шампунь',             quantity: 1,  basePrice: 18100,  nds: 20, status: 0},
        {id: 2,  ttnId: 3, title: 'Салфетки',            quantity: 12, basePrice: 12200,  nds: 20, status: 0},
        {id: 3,  ttnId: 3, title: 'Подгузники',          quantity: 54, basePrice: 13300,  nds: 10, status: 0},
        {id: 4,  ttnId: 3, title: 'Дезодорант',          quantity: 2,  basePrice: 25400,  nds: 20, status: 0},
        {id: 5,  ttnId: 3, title: 'Мешки для мусора',    quantity: 33, basePrice: 22200,  nds: 20, status: 0},
        {id: 6,  ttnId: 3, title: 'Стиральный порошок',  quantity: 8,  basePrice: 56900,  nds: 20, status: 0},
        {id: 7,  ttnId: 3, title: 'Перчатки',            quantity: 5,  basePrice: 1100,   nds: 10, status: 0},
        {id: 8,  ttnId: 3, title: 'Чистящее средство',   quantity: 3,  basePrice: 25600,  nds: 20, status: 0},
        {id: 9,  ttnId: 3, title: 'Бальзам-кондиционер', quantity: 56, basePrice: 65900,  nds: 20, status: 0},
        {id: 10, ttnId: 3, title: 'Антиперспирант',      quantity: 4,  basePrice: 340000, nds: 20, status: 0}
    ];

    this.editingIndex = null;
    var controller = this;

    this.add = function() {
        controller.products.push({ttnId: 3, title: '', basePrice: 0,  nds: 20, status: 0});
        controller.editingIndex = controller.products.length-1;
    };

    this.startEdit = function(index){
        controller.editingIndex = index;
    };

    this.cancelEdit = function(){
        controller.editingIndex = null;
    };

    this.delete = function(index){
        controller.products.splice(index, 1);
    }
});

app.controller('TtnController', function(){
    this.ttns = [
        {id: 1, number: '1234865510', dateFrom: '18.01.1991', status: 0},
        {id: 2, number: '1234865511', dateFrom: '19.02.1992', status: 0},
        {id: 3, number: '1234865512', dateFrom: '10.03.1993', status: 0},
        {id: 4, number: '1234865513', dateFrom: '11.04.1994', status: 0},
        {id: 5, number: '1234865514', dateFrom: '12.05.1995', status: 0},
        {id: 6, number: '1234865515', dateFrom: '13.06.1996', status: 0},
        {id: 7, number: '1234865516', dateFrom: '14.07.1997', status: 0},
        {id: 8, number: '1234865517', dateFrom: '15.08.1998', status: 0},
        {id: 9, number: '1234865518', dateFrom: '16.09.1999', status: 0},
        {id: 10, number: '1234865519', dateFrom: '17.10.2000', status: 0}
    ];

    this.editingIndex = null;
    var controller = this;

    this.add = function() {
        controller.ttns.push({number: '', dateFrom: '', status: 0});
        controller.editingIndex = controller.ttns.length-1;
    };

    this.startEdit = function(index){
        controller.editingIndex = index;
    };

    this.cancelEdit = function(){
        controller.editingIndex = null;
    };

    this.delete = function(index){
        controller.ttns.splice(index, 1);
    }
});
