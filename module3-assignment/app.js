(function(){
    'use strict'
    
    angular.module("NarrowItDownApp",[])
    .controller("NarrowItDownController",NarrowItDownController)
    .service("MenuSearchService",MenuSearchService)
    .directive("foundItems",foundItems);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var controller = this;
        
        controller.searchTerm = '';
        controller.found = [];
        
        controller.getMatchedMenuItems = function(){               controller.found =          MenuSearchService.getMatchedMenuItems(controller.searchTerm);
             console.log(controller.found.length);
            
        }
        
        controller.removeItem = function(index){
            MenuSearchService.removeItem(index);
        }
        
    }
    function MenuSearchService($http){
        var service = this;
        
        service.menuItems = [];
        service.removeItem = function(index){
            service.menuItems.splice(index,1);
        }
             
        service.getMatchedMenuItems = function(searchTerm){
        //console.log(searchTerm);
           
            service.menuItems = [];
            
            $http({
            url:"https://davids-restaurant.herokuapp.com/menu_items.json",
            method:"get"})
           .then(function(response){
           
            var item = {};
            
            for (var i=0;i<response.data.menu_items.length;i++)
            {
              //console.log(response.data.menu_items[i].name);
                if (response.data.menu_items[i].name.indexOf(searchTerm) > -1)                    {
                     
                     item = response.data.menu_items[i];
                     service.menuItems.push(item);
                    }

            }
        });
          console.log(service.menuItems);
          return service.menuItems;    
           
        }

    }
    function foundItems(){
        return {
            templateUrl: "found-items.html",
            scope:{"item":"=","found":"="}            
        };
    }
    
    
})();