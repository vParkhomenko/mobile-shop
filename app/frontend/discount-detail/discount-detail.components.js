angular.module('discountDetail').component('discountDetail', {
    templateUrl: 'discount-detail/discount-detail.html',
    controller: ['$scope', 'Discount', '$routeParams',
        function DiscountDetailController($scope, Discount, $routeParams) {
            $scope.discount = Discount.get({discountId: $routeParams.discountId});
        }
    ]
});



