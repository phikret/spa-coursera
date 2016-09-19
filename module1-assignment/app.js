(function(){
  'use strict'
angular.module("LunchCheck",[])
.controller("LunchCheckController",DoAllTheJob);

  DoAllTheJob.$inject = ['$scope'];
  function DoAllTheJob($scope){

      $scope.message = '';
      $scope.lunchmenu = '';
      $scope.numberOfItems = 0;
      $scope.messageClass = 'green';

      $scope.checkLunchMenu = function(){
        $scope.numberOfItems = 0;
        var arrayOfItems = $scope.lunchmenu.split(',');
        for (var i =0;i<arrayOfItems.length;i++)
        {
           if (arrayOfItems[i].length != 0)
           {
             $scope.numberOfItems++;
           }
        }
        console.log($scope.numberOfItems);
        console.log(arrayOfItems);
          switch($scope.numberOfItems) {
            case 0:
            {
            $scope.message = "Please enter data first";
            $scope.messageClass="red";
            }
            break;
            case 1:
            case 2:
            case 3:
            {
            $scope.message = "Enjoy";
            $scope.messageClass="green";
            }
            break;
            default:
            {
            $scope.message = "Too much";
            $scope.messageClass="green";
            }
           };

}
}
})();
