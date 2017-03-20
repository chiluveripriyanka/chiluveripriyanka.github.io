(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy_items = this;
  tobuy_items.tobuy_items_list = ShoppingListCheckOffService.getToBuyItems();

  tobuy_items.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought_items = this;
  bought_items.bought_items_list = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyitems = [
    { name: "Milk", quantity: 10},
    { name: "Donuts", quantity: 5 },
    { name: "Cookies", quantity: 2},
    { name: "Chocolates", quantity: 20 },
    { name: "Peanut Butter", quantity: 15 },
    { name: "Pepto Bismol", quantity: 5 }
  ];
  var boughtItems = [];
  this.moveItem = function (itemIndex) {

    boughtItems.push(toBuyitems[itemIndex]);
    toBuyitems.splice(itemIndex, 1);

  };
  this.getToBuyItems = function () {
    return toBuyitems;
  };
  this.getBoughtItems = function () {
    return boughtItems;
  };
}

})();