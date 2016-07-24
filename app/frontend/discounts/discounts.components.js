angular.module('discounts').component('discounts', {
    templateUrl: 'discounts/discounts.html',
    controller: ['$scope', 'Discount',
        function DiscountsController($scope, Discount) {
            $scope.discounts = Discount.query();
        }
    ]
});