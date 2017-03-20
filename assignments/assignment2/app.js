(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);




ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy_items = this;
  tobuy_items.tobuy_items_list = ShoppingListCheckOffService.getItems();
  tobuy_items.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought_items = this;
  bought_items.itemName = "";
  bought_items.itemQuantity = "";

  bought_items.addItem = function () {
    ShoppingListService.addItem(bought_items.itemName, bought_items.itemQuantity);
  }
  bought_items.bought_items_list = ShoppingListCheckOffService.boughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuy_items_list = [
    { name: "Milk", quantity: 10},
    { name: "Donuts", quantity: 5 },
    { name: "Cookies", quantity: 2},
    { name: "Chocolates", quantity: 20 },
    { name: "Peanut Butter", quantity: 15 },
    { name: "Pepto Bismol", quantity: 5 }
  ];
  service.getItems = function () {
    return tobuy_items_list;
  };
  var bought_items_list = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    bought_items_list.push(item);
  };
  service.removeItem = function (itemIdex) {
    var boughtItems = tobuy_items_list.splice(itemIdex, 1);
    var name = (boughtItems[0]['name']);
    var quantity = (boughtItems[0]['quantity']);
    service.addItem(name,quantity)
  };
  service.boughtItems = function (){
    return bought_items_list;
  }
}

})();