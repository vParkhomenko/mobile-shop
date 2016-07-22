angular.module('laptops').component('laptops', {
    templateUrl: 'catalog/laptops/laptops.html',
    controller: ['$scope', '$http', '$routeParams',
        function LaptopsController($scope, $http, $routeParams) {

            $http.get('catalog/laptops/laptops/laptops.json').then(function(response) {
                $scope.laptops = response.data;
            });
        }
    ]
});