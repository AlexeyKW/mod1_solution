( function () {
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.inject = ['$scope'];

function LunchCheckController ($scope) {

$scope.list = "";

$scope.lunchcalculator = function () {
 var item =  $scope.list.split(',');
 var totalItems = item.length;
 $scope.totalValue = totalItems;

 $scope.$watch('totalValue', function(totalItems) {
 if($scope.list === "")
{
  $scope.message = "Please enter the items first";
  $scope.textCol = "red";
}
else if(totalItems <=3) 
{
  $scope.message ="Enjoy!";
  $scope.textCol = "green";
}
else
{
  $scope.message = "Too much!";
  $scope.textCol = "green";
}
});
};
}
})();