angular.module('laptops').component('laptops', {
    templateUrl: 'catalog/laptops/laptops.html',
    controller: ['$scope', 'Laptop',
        function LaptopsController($scope, Laptop) {
            $scope.laptops = Laptop.query();
        }
    ]
});