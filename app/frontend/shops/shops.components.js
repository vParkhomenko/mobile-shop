angular.module('shops').component('shops', {
    templateUrl: 'shops/shops.html',
    controller: ['$scope', '$http', '$routeParams',
        function ShopsController($scope, $http, $routeParams) {
            $http.get('shops/shops/shops.json').then(function(response) {
                $scope.shops = response.data;
            });
        }
    ]
});