angular.module('buyingOnline').component('buyingOnline', {
    templateUrl: 'buying-online/buying-online.html',
    controller: ['$scope', '$http', '$routeParams',
        function BuyingOnlineController($scope, $http, $routeParams) {

            $http.get('buying-online/buying-online/buying-online.json').then(function(response) {
                $scope.buyingOnline = response.data;
            });
        }
    ]
});