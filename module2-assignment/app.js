(function(){

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyCtrl = this;
  toBuyCtrl.getAllItemsToBuy = ShoppingListCheckOffService.getAllItemsToBuy();
  toBuyCtrl.markBought = function(ind)
    {
    ShoppingListCheckOffService.markBought(ind);
    }
  toBuyCtrl.allItemsBought = function() { 
      return ShoppingListCheckOffService.allItemsBought();
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtCtrl = this;

  boughtCtrl.getAllBoughtItems = ShoppingListCheckOffService.getAllBoughtItems();

    boughtCtrl.nothingBought = function() { 
      return ShoppingListCheckOffService.nothingBought();}
}

function ShoppingListCheckOffService(){

var shoppingList = this;

//list of items to buy
shoppingList.itemsToBuy = [{name:"Milk", quantity:"2 bottles"},
{name:"Bread", quantity:"2 pieces"},
{name:"Juice", quantity:"1 liter"},
{name:"Eggs", quantity:"30 pieces"},
{name:"Sugar", quantity:"3 kilograms"}];

//method to return all items to buy
shoppingList.getAllItemsToBuy = function(){
// console.log(shoppingList.itemsToBuy);
return shoppingList.itemsToBuy;
}

//list of bought items
shoppingList.itemsBought = [];

//method to return all items to buy
shoppingList.getAllBoughtItems = function(){
// console.log(shoppingList.itemsToBuy);
return shoppingList.itemsBought;
}

//returns number of bought items
shoppingList.allItemsBought = function() { var result = ( shoppingList.itemsToBuy.length === 0) ? true : false;
return result;
  }

//returns true if boughtItems list is empty
shoppingList.nothingBought = function() { var result = ( shoppingList.itemsBought.length === 0) ? true : false;
return result;
  }

//method to mark item bought
shoppingList.markBought = function(ind){
//This will return array with one object (bought item), so we must address it using array index [0]
var boughtItem = shoppingList.itemsToBuy.splice(ind,1)[0];
// console.log(boughtItem);
shoppingList.itemsBought.push(boughtItem);
console.log(shoppingList.allItemsBought());

}
}

})();
