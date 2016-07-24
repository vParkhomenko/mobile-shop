angular.module('shops').component('shops', {
    templateUrl: 'shops/shops.html',
    controller: ['$scope', 'Shops',
        function ShopsController($scope, Shops) {
            $scope.shops = Shops.query();
        }
    ]
});