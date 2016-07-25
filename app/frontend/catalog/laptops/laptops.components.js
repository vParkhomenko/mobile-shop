angular.module('laptops').component('laptops', {
    templateUrl: 'catalog/laptops/laptops.html',
    controller: ['$scope', 'Laptop', '$routeParams',
        function LaptopsController($scope, Laptop, $routeParams) {
            $scope.laptops = Laptop.query({laptopId: $routeParams.category});
        }
    ]
});